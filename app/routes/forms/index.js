import { LabelsLeftLayout, LabelsTopLayout, LabelsTopLayoutCell } from 'cx/ui';
import { Button, LabeledContainer, LookupField, TextArea, TextField, ValidationGroup } from 'cx/widgets';
import { GET } from '../../api/util/methods';
import Controller from './Controller';

export default (
   <cx>
      <div controller={Controller}>
         <form class="p-8" onSubmit="onLogin">
            <div>Login Form</div>
            <ValidationGroup invalid-bind="$page.invalid" visited-bind="$page.visited">
               <LabelsLeftLayout columns={3}>
                  <TextField label="Username" value-bind="$page.username" required validationMode="help-block" />
                  <TextField label="Password" value-bind="$page.password" required validationMode="help-block" />
                  <Button submit>Sign In</Button>
               </LabelsLeftLayout>
            </ValidationGroup>
         </form>
         <div class="p-8">
            <ValidationGroup invalid-bind="$page.changePassword.invalid" visited-bind="$page.visited">
               <div>Change Password</div>
               <LabelsLeftLayout columns={3}>
                  <TextField
                     label="New Password"
                     value-bind="$page.changePassword.newPassword"
                     required
                     validationMode="help-block"
                     minLength={6}
                     inputType="password"
                     onValidate={(value) => {
                        let digits = false,
                           alphas = false;
                        for (let i = 0; i < value.length; i++) {
                           let c = value[i];
                           if (c >= '0' && c <= '9') digits = true;
                           if (c >= 'a' && c <= 'z') alphas = true;
                        }

                        if (!alphas) return 'Alphas missing.';
                        if (!digits) return 'Password should contain at least one digit.';
                        return false;
                     }}
                     validationRegExp={/abc/}
                     validationErrorText="Password should be abc."
                  />
                  <TextField
                     label="Confirm Password"
                     value-bind="$page.changePassword.confirmPassword"
                     required
                     validationMode="help-block"
                     inputType="password"
                     validationParams={{
                        newPassword: { bind: '$page.changePassword.newPassword' },
                     }}
                     onValidate={(value, { store }, params) => {
                        if (params.newPassword != value) return 'Password do not match';
                        return false;
                     }}
                  />
                  <Button onClick="onChangePassword">Change</Button>
               </LabelsLeftLayout>
            </ValidationGroup>
         </div>
      </div>
   </cx>
);
