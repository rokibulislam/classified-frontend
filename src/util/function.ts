export const getActiveLanguage = () => {
    return localStorage.getItem('activeLanguage') || 'en';
}