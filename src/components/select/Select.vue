<template>
  <div>
    <div ref="kSelect" class="k-select" v-clickBlur="handleClickBlur">
      <div class="k-input k-input--suffix" :class="{'is-focus': showFlag, 'is-disabled': disabled}">
        <input class="k-input--inner" type="text"
               readonly="readonly"
               :autocomplete="autocomplete"
               :placeholder="placeholder"
               v-model="label"
               @click="toggle"
               :disabled="disabled">
        <span class="k-input__suffix">
        <span class="k-input__suffix--inner">
          <i class="k-select--caret k-input--icon k-icon-unfold" @click="toggle"></i>
        </span>
      </span>
      </div>
    </div>
    <transition name="k-select-fade">
      <div ref="selectDropdown" class="k-select-dropdown" v-show="showFlag">
        <div class="k-scrollbar">
          <div class="k-select-dropdown--wrap">
            <ul class="k-select-dropdown--list">
              <slot></slot>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { getAbsLeft, getAbsTop } from "../../utils/getAbsPosition";
  import { isParent } from "../../utils/make-compatible";
  import {clickBlur} from '../../directive/clickBlur'
  import Emitter from '../../mixins/emitter'
  export default {
    name: 'KSelect',
    mixins: [Emitter],
    props: {
      value: [String, Number],
      disabled: Boolean,
      multiple: Boolean,
      placeholder: {
        type: String,
        default: '请选择'
      },
      autocomplete: {
        type: String,
        default: 'off'
      }
    },
    directives: {
      clickBlur
    },
    data() {
      return {
        showFlag: false,
        label: '',
        currentValue: this.value
      }
    },
    watch: {
      value(value) {
        this.currentValue = value;
        this.broadcast('KOption', 'on-message', [this.currentValue])
      }
    },
    mounted() {
      this.$on('on-select', this.optionSelect);
      this.broadcast('KOption', 'on-message', [this.currentValue]);
      // let _this = this;
      // window.onresize = function () {
      //   _this.handleDropdown();
      // }
    },
    methods: {
      toggle() {
        this.showFlag = !this.showFlag;
        this.$nextTick(function () {
          this.handleDropdown();
        })
      },
      handleClickBlur() {
        this.showFlag = false;
      },
      optionSelect(option) { // option 是一个对象
        this.showFlag = false;
        this.label = option.label;

        this.$emit('input', option.value);
        this.$emit('change', option.value);
      },
      handleDropdown() {
        var kSelect = this.$refs.kSelect
        var selectDpd = this.$refs.selectDropdown;
        var docHeight = document.documentElement.clientHeight || document.body.clientHeight || 0;
        var docScroll = document.body.scrollTop || document.documentElement.scrollTop || 0;
        var kSelectWd = kSelect.offsetWidth;
        var kSelectHd = kSelect.offsetHeight;
        var absLeft = getAbsLeft(kSelect);
        var absTop = getAbsTop(kSelect);

        var KSelectBt = kSelect.getBoundingClientRect().bottom;
        var KSelectTp = kSelect.getBoundingClientRect().top;
        var selectDpdHei = selectDpd.offsetHeight;

        document.body.appendChild(selectDpd);
        selectDpd.style.minWidth = kSelectWd + 'px';
        selectDpd.style.left = absLeft + 'px';

        if (KSelectBt + selectDpdHei < docHeight) {
          selectDpd.style.top = absTop + kSelectHd + 'px';
        } else {
          if (selectDpdHei < absTop) {
            selectDpd.style.top = absTop - selectDpdHei - 10 + 'px';
          } else {
            selectDpd.style.top = docHeight - selectDpdHei - 10 + 'px';
          }
        }

      }
    },
    beforeDestroy() {
      var selectDpd = this.$refs.selectDropdown;
      if (selectDpd.parentNode == document.body) {
        document.body.removeChild(selectDpd);
      }
    }

  }
</script>
