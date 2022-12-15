export default ({ app }, inject) => {
  inject('scroll_top', () => {
    window.scrollTo({ top: 0 });
  });

  inject('is_empty_value', (value) => {
    if (value === undefined) {
      return true;
    }
    if (value === null) {
      return true;
    }
    if (value === []) {
      return true;
    }
    if (value === '') {
      return true;
    }
    return false;
  });

  inject('is_not_empty_array', (value) => {
    if (!Array.isArray(value)) {
      return false;
    }
    return value.length > 0;
  });

  inject('date_formatter', (date, type = 'yyyy/mm/dd') => {
    let day = new Date(Date.parse(date)).toLocaleDateString("zh-Hans-CN");
    if ( type === 'mm/dd' ) {
      const mm = new Date(Date.parse(date)).getMonth() + 1;
      const dd = new Date(Date.parse(date)).getDate();
      day = `${mm}/${dd}`;
    }
    return day;
  });

  inject('number_with_commas', (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
}