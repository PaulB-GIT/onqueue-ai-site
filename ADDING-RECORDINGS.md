# Adding a sample call recording to a service

The Sample calls section on the Services page already has the audio player and the live transcript built in. A service shows a player only after you add a recording for it. Until then it shows its written sample script.

## 1. Prepare the audio file
- Use MP3 if you can (M4A also works). Mono at 48–64 kbps is plenty for speech, which is about 2–3 MB for a 6-minute call.
- Bleep or remove anything personal, such as full names, phone numbers, emails and addresses. Only publish calls where everyone on the recording has agreed to it.
- Name the file after the service:

| Service | File name |
|---|---|
| Appointment setting | `appointment-setting.mp3` |
| Receptionist | `receptionist.mp3` |
| Answering service | `answering-service.mp3` |
| Customer support | `customer-support.mp3` |
| Outbound follow-up | `outbound-follow-up.mp3` |

## 2. Put the file in `public/audio/`
On GitHub, open the **public** folder and click **Add file**, then **Upload files**. If the `audio` folder doesn't exist yet, type `audio/` at the start of the file-name box first. Then drop in the file and click **Commit changes**.

## 3. Add the transcript in `src/data/home.ts`
Find the service in the `showcase` list. Each service has a line that reads `recording: null as Recording | null,`. Replace that line with:

```ts
recording: {
  src: '/audio/customer-support.mp3',
  note: 'A real test call with an ON-QUEUE AI voice agent. Personal details are bleeped.',
  transcript: [
    { at: 0, speaker: 'agent', text: 'Thanks for calling… This is Ligaya, an AI assistant.' },
    { at: 10, speaker: 'caller', text: 'What’s your name again?' },
    // one line per turn. at = seconds from the start, when this line begins
  ],
} as Recording | null,
```

- `at` is the time in seconds, so 1:25 is `85`. The highlight moves to each line at that time.
- `speaker` is `'agent'` or `'caller'`.
- Update the same service's `result` and `chips` so they match what happens in the call.
- If a line contains an apostrophe, write it as ’, the curly kind, or put a \ before a straight one.

Easier option: send the recording to Claude. Claude will convert it, write the timed transcript, flag any personal details, and give you the finished files to upload.

## 4. Publish
In Render, click **Manual Deploy**, then **Deploy latest commit**.
