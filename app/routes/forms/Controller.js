export default {
   onInit() {},

   onLogin(ev) {
      ev.preventDefault();

      let { username, password, invalid } = this.store.get('$page');

      if (invalid) {
         this.store.set('$page.visited', true);
         return;
      }

      alert(username);
   },
};
