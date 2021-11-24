import { Widget, VDOM } from 'cx/ui';

export class HoverTracker extends Widget {
   declareData(...args) {
      super.declareData(...args, {
         hover: undefined,
      });
   }

   render(context, instance, key) {
      return <HoverTrackerComponent key={key} instance={instance} />;
   }
}

class HoverTrackerComponent extends VDOM.Component {
   constructor(props) {
      super(props);
      this.state = {
         hover: null,
      };
   }

   render() {
      let content = '';
      let { instance } = this.props;
      let { hover } = this.state;

      if (hover === false) content = ':(';
      else if (hover === true) content = ':)';
      else content = '';

      return (
         <div
            class="p-6 bg-gray-300 inline-block"
            onMouseEnter={(event) => {
               this.setState({ hover: true });
               instance.set('hover', true);
            }}
            onMouseLeave={(event) => {
               this.setState({ hover: false });
               instance.set('hover', false);
            }}
         >
            {content}
         </div>
      );
   }
}
