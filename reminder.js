// reminder.js

class WeatherReminder {
    constructor() {
        this.reminders = [];
    }

    addReminder(dateTime, message) {
        this.reminders.push({ dateTime, message });
        this.scheduleReminder(dateTime, message);
    }

    scheduleReminder(dateTime, message) {
        const now = new Date();
        const reminderTime = new Date(dateTime);
        const timeUntilReminder = reminderTime - now;

        if (timeUntilReminder > 0) {
            setTimeout(() => {
                console.log(`Reminder: ${message}`);
            }, timeUntilReminder);
        } else {
            console.log(`Cannot set reminder for past date: ${dateTime}`);
        }
    }

    listReminders() {
        return this.reminders;
    }
}

// Example usage:
const reminderSystem = new WeatherReminder();
reminderSystem.addReminder('2026-03-22T09:00:00Z', 'Check the weather for your outdoor plans!');

