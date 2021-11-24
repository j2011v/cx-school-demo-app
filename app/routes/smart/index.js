import { TextField } from 'cx/widgets';
import Controller from './Controller';

export default (
   <cx>
      <div controller={Controller} class="p-8">
         <TextField value-bind="firstName" label="First Name" />
      </div>
   </cx>
);
