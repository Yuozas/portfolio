export const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;

    let duration = '';
    if (years > 0) duration += `${years} year${years > 1 ? 's' : ''}`;
    if (months > 0) {
        if (duration) duration += ', ';
        duration += `${months} month${months > 1 ? 's' : ''}`;
    }
    if (days > 0 || duration === '') {
        if (duration) duration += ', ';
        duration += `${days} day${days !== 1 ? 's' : ''}`;
    }

    return duration;
};