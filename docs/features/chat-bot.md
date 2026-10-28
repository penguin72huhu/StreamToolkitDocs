---
sidebar_position: 18
---

# Chat Bot

Posts messages in your chat automatically: timed messages at a set interval, and keyword replies when a viewer types a command. The bot posts from your own account.

The chat bot has no OBS overlay, so there is no URL to add.

:::tip
Turn on the switch next to **Chat Bot** in the left menu. While it is off, the bot sends nothing.
:::

The page has three tabs: **Settings**, **Timed Messages**, and **Keyword Replies**.

## Settings Tab

Under **Platforms**, click **Twitch** to turn it on (click again to turn it off). The dot next to it lights up when Twitch is connected; otherwise it shows **(Not connected)**. Connect Twitch first: [Twitch Settings](../platforms/twitch.md).

**YouTube** is shown as **Coming soon** and cannot be turned on yet.

If no platform is connected, the other two tabs show "No platform is connected, so the bot will not send anything." with a **Go to settings** button.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Timed Messages

Posts a message every so often while you are live.

1. Click **+ Add**
2. Fill in:
   - **Message**: the text to post (up to 500 characters on Twitch). It is always one line: Enter does nothing and pasted line breaks become spaces
   - **Interval**: minutes between posts (5–240, default 15)
   - **Min. chat lines**: how many new chat lines are needed since the last post before it posts again (0–100, default 2), so it does not keep posting into an empty chat
   - **Platforms**: where to post
3. Click **Save**

How it posts:

- Only while your stream is live. The first post comes one full interval after you go live, not the moment the stream starts
- If several timed messages are due at once, they are spread out instead of posted together

## Keyword Replies

Replies when a viewer's message starts with a command.

1. Click **+ Add**
2. Fill in:
   - **Command**: choose the prefix (`! @ # $ % & ~`), then type one word without spaces, e.g. `!dc`. It is matched against the first word of a chat message, ignoring upper/lower case
   - **Reply**: the text to post. `{user}` is replaced with the name of the viewer who used the command
   - **Cooldown**: seconds before the same command can reply again (0–3600, default 5)
   - **Platforms**: where to reply
3. Click **Save**

Keyword replies work at any time, live or not.

A command cannot be the same as another keyword reply, or as a command already used by [Song Requests](./song-request.md) or the [Giveaways](./lottery.md) keyword.

## Managing the List

In both tabs, each item has:

- A checkbox on the left to turn the item on or off without deleting it
- Platform tags; a dimmed tag means that platform is turned off on the Settings tab
- **Edit** and **Delete**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Trial Version Limits
- 1 timed message and 1 keyword reply
- Every message ends with ` (by StreamToolkit)`, so the maximum message length is shorter

See [Trial / Full Version Comparison](../getting-started/trial-comparison.md).
:::
