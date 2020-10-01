import Vue from 'vue';
import { PluginFunction, VueConstructor } from 'vue';


declare global {
  interface Window {
    Vue?: VueConstructor<Vue>
  }
}

export default {
  install() {}
} as {
  install: PluginFunction<any>;
};
