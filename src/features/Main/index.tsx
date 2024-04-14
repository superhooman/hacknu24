'use client';
import { AdvancedMarker, Map as MapBase } from '@vis.gl/react-google-maps';
import {
    Avatar,
    Badge,
    Button,
    CheckboxCards,
    Flex,
    Heading,
    Text,
} from '@radix-ui/themes';
import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import dynamic from 'next/dynamic';

import {
    ForteBlackCardIcon,
    HalykCardIcon,
    KaspiGoldCardIcon,
    SimplyCardIcon,
} from '@src/components/CardIcons';
import { Modal } from '@src/components/Modal';
import { type Card, type Place } from '@src/server/db/schema';

import * as cls from './styles.css';

const Navbar = dynamic(() => import('./navbar'), { ssr: false });

const CARDS = [
    {
        value: 'forte',
        label: 'Forte Black',
        icon: <ForteBlackCardIcon size={32} />,
    },
    {
        value: 'simply',
        label: 'Simply',
        icon: <SimplyCardIcon size={32} />,
    },
    {
        value: 'halyk',
        label: 'Halyk Bonus',
        icon: <HalykCardIcon size={32} />,
    },
    {
        value: 'kaspi',
        label: 'Kaspi Gold',
        icon: <KaspiGoldCardIcon size={32} />,
    },
];

const position = { lat: 51.08921, lng: 71.406651 };

export const Main: React.FC<
  React.PropsWithChildren<{ items: Place[]; cards: Card[] }>
> = ({ items, cards }) => {
    const [userCards, setUserCards] = useLocalStorage<string[]>('cards', ['kaspi']);
    const [open, setOpen] = React.useState(false);
    const [settingsOpen, setSettingsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<Place | null>(null);

    const handleSelect = React.useCallback((item: Place) => {
        setSelected(item);
        setOpen(true);
    }, []);

    const handleOpen = React.useCallback(() => {
        setSettingsOpen(true);
    }, []);

    const handleClose = React.useCallback(() => {
        setSettingsOpen(false);
    }, []);

    const forteCard = React.useMemo(
        () => cards.find((card) => card.id === 'forte'),
        [cards]
    );
    const simplyCard = React.useMemo(
        () => cards.find((card) => card.id === 'simply'),
        [cards]
    );

    const calculateDeals = React.useCallback((item: Place, card: Card) => {
        if (!card) return [];

        const deals = card.deals.filter((deal) =>
            item.mcc.some((mcc) => deal.mcc.includes(mcc))
        );

        if (card.generic > 0 && deals.length === 0) {
            deals.push({
                mcc: [],
                percent: card.generic,
                condition: 'Все операции',
            });
        }

        return deals;
    }, []);

    const getCardItems = React.useCallback(
        (item: Place) => {
            const items: CardItemProps[] = [];

            if (simplyCard && userCards.includes('simply')) {
                calculateDeals(item, simplyCard).map((deal) => {
                    items.push({
                        icon: <SimplyCardIcon size={32} />,
                        value: deal.percent,
                        description: deal.condition,
                    });
                });
            }

            if (forteCard && userCards.includes('forte')) {
                calculateDeals(item, forteCard).map((deal) => {
                    items.push({
                        icon: <ForteBlackCardIcon size={32} />,
                        value: deal.percent,
                        description: deal.condition,
                    });
                });
            }

            if (item.halyk && userCards.includes('halyk')) {
                if (item.halyk.bonus) {
                    items.push({
                        icon: <HalykCardIcon size={32} />,
                        value: item.halyk.bonus,
                    });
                }

                if (item.halyk.phone) {
                    items.push({
                        icon: <HalykCardIcon size={32} />,
                        value: item.halyk.phone,
                        description: 'при оплате через NFC/QR',
                        addPlus: item.halyk.bonus !== undefined,
                    });
                }
            }

            if (item.kaspi && userCards.includes('kaspi')) {
                items.push({
                    icon: <KaspiGoldCardIcon size={32} />,
                    value: 0.25,
                    description: 'с оплатой через KaspiQR',
                });
            }

            return items.sort((a, b) => b.value - a.value);
        },
        [calculateDeals, userCards, forteCard, simplyCard]
    );

    return (
        <>
            <Map items={items} onClick={handleSelect} />
            <Navbar userCards={userCards} onCardsOpen={handleOpen} />
            <Modal open={open} onOpenChange={setOpen}>
                {selected ? (
                    <>
                        <Flex gap="4" pb="4" align="center">
                            <Avatar
                                radius="full"
                                size="5"
                                src={selected.image ?? undefined}
                                fallback={selected.name.charAt(0)}
                            />
                            <Flex direction="column" overflow="hidden">
                                <Heading className={cls.text} size="3">
                                    {selected.name}
                                </Heading>
                                <Text className={cls.text} size="2" color="gray">
                                    {selected.address}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex direction="column">
                            {getCardItems(selected).map((item, index) => (
                                <CardItem key={index} {...item} />
                            ))}
                        </Flex>
                    </>
                ) : null}
            </Modal>
            <Modal open={settingsOpen} onOpenChange={setSettingsOpen}>
                <Flex direction="column" gap="4">
                    <Heading size="5">Выберите карты</Heading>
                    <CheckboxCards.Root
                        value={userCards}
                        onValueChange={setUserCards}
                        columns="1"
                    >
                        {CARDS.map((item) => (
                            <CheckboxCards.Item key={item.value} value={item.value}>
                                <Flex align="center" gap="2">
                                    {item.icon}
                                    <Text weight="bold" size="2">
                                        {item.label}
                                    </Text>
                                </Flex>
                            </CheckboxCards.Item>
                        ))}
                    </CheckboxCards.Root>
                    <Button
                        variant="soft"
                        size="4"
                        onClick={handleClose}
                    >
            Закрыть
                    </Button>
                </Flex>
            </Modal>
        </>
    );
};

interface CardItemProps {
  icon: React.ReactNode;
  value: number;
  addPlus?: boolean;
  description?: string;
}

export const CardItem: React.FC<CardItemProps> = ({
    icon,
    value,
    description,
    addPlus,
}) => (
    <Flex className={cls.item} align="center" justify="between">
        {icon}
        <Flex gap="1" align="end" direction="column">
            <Badge color="gray" size={description ? '1' : '3'}>
                {addPlus ? '+' : ''}
                {value}%
            </Badge>
            {description ? <Text size="1">{description}</Text> : null}
        </Flex>
    </Flex>
);

export const Map: React.FC<{ items: Place[], onClick: (item: Place) => void }> = ({ items, onClick }) => {
    return (
        <MapBase
            className={cls.root}
            defaultCenter={position}
            defaultZoom={15}
            disableDefaultUI
            mapId="beb792da52e756e2"
        >
            {items.map((item) => (
                <MapItem key={item.id} item={item} onClick={onClick} />
            ))}
        </MapBase>
    );
};

export const MapItem: React.FC<{ item: Place, onClick: (item: Place) => void }> = ({ item, onClick }) => {
    const handleClick = React.useCallback(() => {
        onClick(item);
    }, [item, onClick]);

    return (
        <AdvancedMarker
            position={{ lat: item.lat, lng: item.lng }}
            onClick={handleClick}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img width="20px" src="/dot_1x.png" srcSet="/dot_1x.png 1x, /dot_2x.png 2x" alt="dot" />
        </AdvancedMarker>
    );
};
