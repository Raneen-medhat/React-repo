export const languageReducer = (lang = 'en', action) => {
   if (action.type === 'CHANGE_LANGUAGE') {
        return lang === 'en' ? 'ar' : 'en';
    }
        return lang;
  };
