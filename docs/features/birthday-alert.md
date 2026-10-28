---
sidebar_position: 8.2
---

# Viewer Birthday Alerts

Add your viewers' birthdays to a list. When a listed viewer chats during your stream on or shortly after their birthday, a birthday alert pops up on stream. Each viewer gets one alert per birthday.

## OBS Source URL

```
http://127.0.0.1:7272/birthday-alert
```

Copy the URL from the top of the **Viewer Birthday Alerts Settings** page and add it to OBS as a Browser Source. See [How to Add Sources in OBS](../getting-started/obs-source.md).

:::warning
Alerts play a sound. Tick **Control audio via OBS** in the browser source properties, or the sound won't be heard on stream.
:::

Turn on the switch next to **Viewer Birthday Alerts** in the left sidebar. Only while it is on does the app connect to chat and check birthdays. The **Test alert** and **Replay** buttons work even while it is off.

The page has three tabs: **Settings**, **Viewers** and **Appearance**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## How It Works

- A viewer on the list who chats from their birthday up to the number of days you set afterwards gets an alert. Nothing shows before the birthday.
- Each viewer gets one alert per birthday. A birthday on 12/28 that is announced on 1/2 still counts as the previous year's birthday.
- Alerts only fire while the platform the viewer chatted on is live. While you are offline, or while the app can't tell yet whether you are live, chatting doesn't trigger or record the alert; it shows the next time they chat during a stream.
- Chat history loaded when YouTube chat connects doesn't count, so restarting the app won't announce people who chatted while it was closed.
- A 2/29 birthday falls on 2/28 in non-leap years.

## Settings Tab

### Chat Connection

Shown when the feature is turned on. Each platform shows whether its chat is connected:

- **Twitch**: if no channel is set, the row shows **No Twitch channel set — link Twitch first** with **Go to settings**. Connect Twitch first: [Twitch Settings](../platforms/twitch.md).
- **YouTube**: if the chat isn't connected, the row shows **Auto-connect** and **Enter manually** (takes you to the chat URL field in Settings). If you use auto-connect and are signed in with Google, it shows **If it hasn't connected once you're live, press Connect on the Chat page**. See [YouTube Settings](../platforms/youtube-settings.md) and [Chat](./chat.md).

Once a platform is connected, it also shows **Live**, **Offline** or **Can't tell if live**. Alerts only fire on **Live**.

### Settings

| Field | Description |
|-------|-------------|
| **Days after the birthday that still count** | 0–30. Default: 7. 0 = the birthday itself only. |
| **Display Duration** | How long each alert stays on screen, in seconds (1–60). Default: 6. |

### Testing Alerts

Click **Test alert** to send a sample alert to OBS, using a test viewer and today's date. It is shown in OBS only and never recorded, and it works even with the switch in the left sidebar turned off. The button briefly changes to **Sent**.

## Viewers Tab

### Adding a Viewer

There are two ways to add a viewer:

- **+ Add from recent chatters**: pick someone who chatted recently. The form opens with their name as the note, their account already linked, and today's date as the birthday.
- **+ Add by name**: type the account name yourself.

**Recent chatters** lists viewers who chatted while chat was connected (up to 200, kept for 30 days). Click **Refresh** to update it. Viewers already on the list show **Added** and can't be picked again. A search box appears when the list is long.

Fill in the form:

1. **Note / nickname**: the name you know them by, e.g. `Alex`. Optional.
2. **Birthday**: month and day (no year).
3. **Accounts**: at least one account. One viewer can have several accounts, e.g. both Twitch and YouTube.
   - **＋ Type an account**: choose **Twitch** or **YouTube** and type the name. For Twitch, use the login or display name; for YouTube, the @handle or channel name.
   - **＋ From recent chatters**: add an account that is already linked.
   - **✕** removes an account.
4. Click **Save** (or press Enter). **Cancel** (or Esc) closes the form.

### Typed Names and Linking

A typed name is linked to the account the first time that viewer chats. Matching ignores upper/lower case and a leading `@`. Names can be shared, so picking from recent chatters is safer.

For YouTube, type the @handle: unless **Show viewer names instead of @handles** is turned on in the Chat page, a channel name may never match.

Each account on the list shows:

- **Linked: [name]**: the account is linked.
- **Waiting for "[name]" to chat**: a typed name that hasn't been linked yet.
- **Newly linked**: the app linked this account automatically when the viewer chatted. Check that it's really them, then click **✓ Looks right**, or click **Unlink** if it isn't.
- **This account is already on "[name]"**: the typed name matched an account that belongs to another viewer on the list. One account can only belong to one viewer, so change the name here or delete one of the two.

**Unlink** opens a box under the account. After unlinking, the name in the box is matched instead (you can change it), and the account links again when that viewer next chats.

### The List

Viewers whose birthday alert is due come first, then the next birthdays coming up. A search box appears when there are more than 5 viewers. Each viewer shows:

- **Waiting to chat**: it's their birthday time; the alert shows as soon as they chat.
- **🎂 Shown [date]**: the alert for this birthday has already been shown.
- **▶ Replay**: show this viewer's alert again in OBS. Works any time and is never recorded.
- **Edit**: change the note, birthday or accounts. Changing the birthday lets the alert fire again for the new date.
- **Delete**: click **Delete**, then **Confirm Delete**.

## Appearance Tab

### Preview

The preview uses the same page as the OBS source. Use the color picker next to **Preview** to change the preview background, and click **▶ Replay animation** to play the alert animation again.

### Unified Style / Per Platform

- **Unified Style**: Twitch and YouTube use the same alert style.
- **Per Platform**: each platform has its own style. Pick **Twitch** or **YouTube** with the buttons below and edit its settings. When you first switch, platforms you haven't customized copy the current unified style, each with its own countdown bar color.

**Reset to Default** restores the default style for the style you are editing.

### Image

- **Choose Image**: pick an image from the asset manager. Without one, a cake emoji is shown. **Clear** removes the image.
- **Image Size**: 1–400 px.
- **Image Position**: **Left**, **Right**, **Top** or **Bottom**.

### Sound

Pick a built-in sound: **None**, **Chime** (default), **Coin**, **Bell**, **Pop**, **Fanfare**. Click **▶** to listen. Click **Choose Sound** to use your own sound file from the asset manager.

### Custom Text

Write the line shown on the alert. Leave it empty to use the default text: `Happy birthday, {name}!` You can use:

| Placeholder | Replaced with |
|-------------|---------------|
| `{name}` | The viewer's name in chat |
| `{label}` | Your note / nickname (the chat name if the note is empty) |
| `{birthday}` | The birthday, e.g. `10/20` |
| `{MM}` `{DD}` | Two-digit month and day, to build your own format, e.g. `{DD}/{MM}` |
| `{date}` | The birthday in the overlay language |
| `{platform}` | The platform name |

### Text and Color

- **Text**: set font, size and color for **Custom Text** and **Viewer name**.
- **Color**: **Background**, **Shadow** and **Countdown Bar**.

### Custom CSS

Expand **Custom CSS** to edit the CSS of the style you are editing (unified or the selected platform). **Reset to Default** restores the template CSS, and **Manage Assets** opens the asset manager. Steam Workshop themes can also be applied here. While a theme is applied, the CSS is read-only. See [Themes](./themes.md).

:::info Trial Version
- Up to 3 viewers on the list. If the list holds more (e.g. from a full-version save), the extra viewers are shown locked 🔒: they never trigger an alert and can't be edited or replayed.
- Custom CSS is only available in the full version.
- The alert shows a watermark in OBS.

See [Trial / Full Version Comparison](../getting-started/trial-comparison.md).
:::

## FAQ

**Q: No sound on stream?**
Check that **Control audio via OBS** is ticked in the browser source properties and that the source isn't muted in the OBS mixer. Also check that **Sound** isn't set to **None**.

**Q: A viewer chatted on their birthday but no alert showed.**
Check that the switch in the left sidebar is on, that the **Chat Connection** on the **Settings** tab shows **Live** for that platform, and that the account on the list shows **Linked** or the typed name matches their chat name. If it was shown while OBS wasn't open, use **▶ Replay**.

**Q: I added the OBS source late. Will it replay earlier alerts?**
No. A newly opened source only shows alerts that arrive after it connects. Use **▶ Replay** on the **Viewers** tab to show one again.
