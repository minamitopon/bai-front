import { Popover as ChakraPopover, Portal } from "@chakra-ui/react"
import Icon from "@/components/primitive/Icon"

const Popover = () => {
  return (
    <ChakraPopover.Root>
      <ChakraPopover.Trigger asChild>
        <Icon name="hint" />
      </ChakraPopover.Trigger>
      <Portal>
        <ChakraPopover.Positioner>
          <ChakraPopover.Content>
            <ChakraPopover.Arrow />
            <ChakraPopover.Body>Some content</ChakraPopover.Body>
          </ChakraPopover.Content>
        </ChakraPopover.Positioner>
      </Portal>
    </ChakraPopover.Root>
  )
}

export default Popover;