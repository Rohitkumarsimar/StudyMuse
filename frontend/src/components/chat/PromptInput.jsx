import { useState } from "react";
import {
  InputGroup,
  InputGroupTextarea,
  InputGroupButton,
} from "#components/ui/input-group.jsx";

export default function PromptInput({ sendMessage, activeConversationId }) {
  const [value, setValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!value.trim()) {
        return
      }
      await sendMessage(activeConversationId, value);
    } catch (err) {
      console.log(err);
    } finally {
      setValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroupTextarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask something..."
        />
        <InputGroupButton type="submit">Send</InputGroupButton>
      </InputGroup>
    </form>
  );
}
