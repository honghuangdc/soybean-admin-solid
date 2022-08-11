import { Suspense } from 'solid-js';
import type { Component } from 'solid-js';
import {
  HopeProvider,
  VStack,
  Center,
  Text,
  HStack,
  Button,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  useColorMode
} from '@hope-ui/solid';
import type { HopeThemeConfig } from '@hope-ui/solid';
import { AppLoading } from '@/components';

const App: Component = () => {
  const appTitle = import.meta.env.VITE_APP_TITLE;

  const config: HopeThemeConfig = {
    initialColorMode: 'system'
  };

  return (
    <Suspense fallback={<AppLoading title={appTitle} />}>
      <HopeProvider config={config}>
        <VStack spacing="$12" padding="$12">
          <Center>
            <Text color="$primary9" size="2xl">
              SoybeanAdmin
            </Text>
          </Center>
          <ColorModeSwitcher />
          <HStack spacing="$4" justifyContent="center">
            <Button colorScheme="primary">Button</Button>
            <Button colorScheme="accent">Button</Button>
            <Button colorScheme="neutral">Button</Button>
            <Button colorScheme="success">Button</Button>
            <Button colorScheme="info">Button</Button>
            <Button colorScheme="warning">Button</Button>
            <Button colorScheme="danger">Button</Button>
          </HStack>
          <HStack spacing="$4">
            <Checkbox defaultChecked colorScheme="primary" />
            <Checkbox defaultChecked colorScheme="accent" />
            <Checkbox defaultChecked colorScheme="neutral" />
            <Checkbox defaultChecked colorScheme="success" />
            <Checkbox defaultChecked colorScheme="info" />
            <Checkbox defaultChecked colorScheme="warning" />
            <Checkbox defaultChecked colorScheme="danger" />
          </HStack>
          <Input placeholder="SoybeanAdmin" />
          <RadioGroup defaultValue="1">
            <HStack spacing="$4">
              <Radio value="1">First</Radio>
              <Radio value="2">Second</Radio>
              <Radio value="3">Third</Radio>
            </HStack>
          </RadioGroup>
        </VStack>
      </HopeProvider>
    </Suspense>
  );
};

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Button onClick={toggleColorMode}>Toggle {colorMode() === 'light' ? 'dark' : 'light'}</Button>;
}

export default App;
