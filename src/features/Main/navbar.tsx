import { Badge, Box, Button, Card, Flex, Text } from '@radix-ui/themes';

import { Logo } from '@src/components/Logo';
import { type Place } from '@src/server/db/schema';

import * as cls from './styles.css';
import { Search } from '../Search';

const Navbar: React.FC<{ userCards: string[]; onCardsOpen: () => void, items: Place[], onSelect: (item: Place) => void }> = ({
    userCards,
    onCardsOpen,
    items,
    onSelect,
}) => {
    return (
        <Card variant="surface" className={cls.card}>
            <Flex gap="3" align="center" justify="between">
                <Flex gap="2" align="center">
                    <Logo size={16} />
                    <Text size="2" weight="medium">
                        Binoculars
                    </Text>
                </Flex>
                <Flex gap="3" flexGrow="1" align="center" justify="end">
                    <Search items={items} onSelect={onSelect} />
                    <Box position="relative">
                        {userCards.length > 0 ? (
                            <Badge
                                className={cls.badge}
                                variant="solid"
                                size="1"
                                radius='full'
                            >
                                {userCards.length}
                            </Badge>
                        ) : null}
                        <Button radius="full" onClick={onCardsOpen} variant="outline">
                            Мои карты
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Navbar;
