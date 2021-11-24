import { PrivateStore, Route } from 'cx/widgets';

export const PrivateRoute = ({ url, route, children }) => (
   <cx>
      <Route url={url} route={route}>
         <PrivateStore>{children}</PrivateStore>
      </Route>
   </cx>
);
