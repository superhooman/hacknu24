import { Badge, Box, Button, Card, Flex, Text } from '@radix-ui/themes';

import { Logo } from '@src/components/Logo';

import * as cls from './styles.css';

const Navbar: React.FC<{ userCards: string[]; onCardsOpen: () => void }> = ({
    userCards,
    onCardsOpen,
}) => {
    return (
        <Card variant="surface" className={cls.card}>
            <Flex gap="2" align="center" justify="between">
                <Flex gap="2" align="center">
                    <Logo size={16} />
                    <Text size="2" weight="medium">
            Binoculars
                    </Text>
                </Flex>
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
        </Card>
    );
};

export default Navbar;
