import { LabelsLeftLayout } from 'cx/ui';
import { TextField } from 'cx/widgets';
import Controller from './Controller';

export default (
   <cx>
      <div controller={Controller} class="p-8">
         <LabelsLeftLayout>
            <TextField value-bind="username" label="Username" />
            <TextField value-bind="password" label="Password" />
         </LabelsLeftLayout>
      </div>
   </cx>
);
