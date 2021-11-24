import { Route, Sandbox, Rescope } from 'cx/widgets';

export const RescopedSandboxedRoute = ({ key, storage, url, route, children }) => (
   <cx>
      <Route url={url} route={route}>
         <Sandbox key={key || url} storage={storage}>
            <Rescope bind="$page">{children}</Rescope>
         </Sandbox>
      </Route>
   </cx>
);
