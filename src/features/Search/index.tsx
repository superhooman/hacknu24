import {
    Avatar,
    Button,
    Flex,
    Heading,
    Inset,
    ScrollArea,
    Separator,
    Spinner,
    Text,
    TextField,
} from '@radix-ui/themes';
import React from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { MagnifyingGlass, X } from '@phosphor-icons/react';

import { Modal } from '@src/components/Modal';
import { type Place } from '@src/server/db/schema';
import { MCC_TO_LABEL } from '@src/app/constants/categories';

import * as cls from './styles.css';


export const Search: React.FC<{ items: Place[], onSelect: (item: Place) => void }> = ({ items, onSelect }) => {
    const [open, setOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');
    const pool = React.useMemo(() => items.map(({ mcc, ...rest }) => ({
        ...rest,
        mcc,
        categories: mcc.map((mcc) => MCC_TO_LABEL[mcc] ?? 'Другое').join(', '),
    })), [items]);

    const [isLoading, startTransition] = React.useTransition();
    const [results, setResults] = React.useState<Place[] | undefined>();

    React.useEffect(() => {
        if (!open) setSearchText('');
    }, [open]);

    const [searchQuery] = useDebounceValue(searchText, 1000);

    React.useEffect(() => {
        if (!searchQuery) return setResults(undefined);

        startTransition(() => {
            setResults(
                pool.filter((item) =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ||
                    item.categories.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        });
    }, [searchQuery, pool]);

    const trigger = (
        <Button className={cls.trigger} size="3" variant="soft" color="gray">
            <MagnifyingGlass />
            <Text className={cls.triggerText} size="2" mr="2">
                Поиск
            </Text>
        </Button>
    );

    const handleClose = React.useCallback(() => {
        setOpen(false);
    }, []);

    const handleSearchChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchText(e.target.value);
        },
        []
    );

    return (
        <Modal
            open={open}
            onOpenChange={setOpen}
            trigger={trigger}
            useDrawer={false}
        >
            <Inset
                style={{
                    height: 'calc(100% - var(--margin-top-override) - var(--margin-bottom-override))',
                }}
            >
                <Flex direction="column" height="100%">
                    <Flex p="4" direction="row" align="center" gap="4">
                        <TextField.Root style={{ flexGrow: 1 }} size="3" value={searchText}
                            placeholder="Поиск"
                            onChange={handleSearchChange}>
                            <TextField.Slot>
                                {isLoading ? <Spinner /> : <MagnifyingGlass />}
                            </TextField.Slot>
                        </TextField.Root>
                        <Button onClick={handleClose} color="gray" variant="soft" size="3">
                            <X />
                        </Button>
                    </Flex>
                    {results ? <Separator size="4" /> : null}
                    <ScrollArea className={cls.scrollArea}>
                        {results ? (
                            <>
                                {results.map((item) => (
                                    <Flex gap="4" p="4" key={item.id} onClick={() => {
                                        onSelect(item);
                                        setOpen(false);
                                    }} overflow="hidden" align="center">
                                        <Avatar
                                            radius="full"
                                            size="4"
                                            src={item.image ?? undefined}
                                            fallback={item.name.charAt(0)}
                                        />
                                        <Flex direction="column" overflow="hidden">
                                            <Heading className={cls.overflow} size="3">
                                                {item.name}
                                            </Heading>
                                            <Text className={cls.overflow} size="2" color="gray">
                                                {item.address}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                ))}
                            </>
                        ) : null}
                    </ScrollArea>
                </Flex>
            </Inset>
        </Modal>
    );
};
