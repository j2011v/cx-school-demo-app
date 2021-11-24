import { Widget } from 'cx/ui';

export class ColorCheckbox extends Widget {
   declareData(...args) {
      super.declareData(...args, {
         value: undefined,
      });
   }

   render(context, instance, key) {
      let { data } = instance;
      return (
         <div
            key={key}
            style={data.style}
            className={this.CSS.expand(data.classNames, {
               [this.CSS.state('on')]: !!data.value,
               [this.CSS.state('off')]: !data.value,
            })}
            onClick={(event) => {
               instance.set('value', !data.value);
            }}
         />
      );
   }
}

ColorCheckbox.prototype.baseClass = 'colorcheckbox';
ColorCheckbox.prototype.styled = true;
ColorCheckbox.prototype.value = false;
