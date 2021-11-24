import Controller from './Controller';
import { ColorCheckbox } from '../../components/ColorCheckbox';
import { CodeMirrorEditor } from '../../components/CodeMirrorEditor';
import { Checkbox } from 'cx/widgets';
import { HoverTracker } from '../../components/HoverTracker';

export default (
   <cx>
      <div controller={Controller} class="p-8">
         <div class="flex gap-2 items-center">
            <ColorCheckbox value={true} />
            <ColorCheckbox value={false} />

            <ColorCheckbox value-bind="$page.stateOn" class="ml-8" />

            <Checkbox value-bind="$page.stateOn" />
         </div>
         <div class="mt-4">
            <CodeMirrorEditor value-bind="$page.code" />

            <pre text-bind="$page.code" />
         </div>

         <div class="mt-4">
            <HoverTracker hover-bind="$page.hover" />

            <Checkbox value-bind="$page.hover" />
         </div>
      </div>
   </cx>
);
