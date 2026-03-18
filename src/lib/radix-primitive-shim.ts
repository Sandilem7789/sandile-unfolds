import * as ReactPrimitive from "@radix-ui/react-primitive";

type EventHandler<E extends Event> = ((event: E) => void) | undefined;

type ComposeOptions = {
  /**
   * When true (default), the second handler only runs if the first handler
   * did not call `event.preventDefault()`.
   */
  checkForDefaultPrevented?: boolean;
};

export function composeEventHandlers<E extends Event>(
  theirHandler: EventHandler<E>,
  ourHandler: EventHandler<E>,
  { checkForDefaultPrevented = true }: ComposeOptions = {}
) {
  return function handleEvent(event: E) {
    theirHandler?.(event);

    if (!ourHandler) return;

    if (!checkForDefaultPrevented || !event.defaultPrevented) {
      ourHandler(event);
    }
  };
}

export * from "@radix-ui/react-primitive";
export { ReactPrimitive };
