<template>
    <div>
        <div class="k-input-number" :class="{'is-disabled': disabled}">
            <span role="button" class="k-input-number--decrease"
                  @click="handleClick(-step)" :class="{'is-disabled': currentValue===min}"> - </span>
            <span role="button" class="k-input-number--increase"
                  @click="handleClick(step)" :class="{'is-disabled': currentValue===max}"> + </span>
            <k-input :disabled="disabled" v-model="currentValue"
                 @input="handleInput"
                 @focus="handleFocus"
                 @blur="handleBlur"
                 @change="handleChange"></k-input>
        </div>
    </div>
</template>
<script>
    export default {
    	name: 'KInputNumber',
	    props: {
		    value: {
		    	type: [Number, String],
                default: 0
            },
            disabled: Boolean,
		    step: {
			    type: Number,
			    default: 1
		    },
		    min: {
			    type: Number,
			    default: -Infinity
		    },
		    max: {
			    type: Number,
			    default: Infinity
		    }
	    },
    	data() {
    		return {
			    currentValue: this.value
            }
        },
        methods: {
            handleClick(step) {
            	if (this.disabled) {
            		return false;
                } else {
		            let value = this.currentValue + step;
		            if (value < this.min) {
			            value = this.min;
		            }
		            if (value > this.max) {
			            value = this.max;
		            }

		            this.currentValue = value;
		            // this.$emit('input', this.currentValue);
                }
            },
	        handleInput(e) { // 这里的 e 直接是 值
		        // console.log(e);
		        // let value = e.trim();
		        // if (value === '') {
                //     this.currentValue = value;
                // } else {
		        // 	if (isNaN(value)) {
                //         e = value;
                //     }
                // }
	        },
	        handleFocus(e) {
            	this.$emit('focus', e)
            },
	        handleBlur(e) {
		        let value = e.target.value.trim();
		        if (value === '') {
			        this.currentValue = value;
		        } else {
			        if (isNaN(value)) {
				        this.currentValue = this.value;
			        }
		        }
		        if (value < this.min) {
			        this.currentValue = this.min;
		        }
		        if (value > this.max) {
			        this.currentValue = this.max;
		        }
		        this.$emit('focus', e)
            },
	        handleChange(e) {
		        this.$emit('focus', e)
	        }
        }
    }
</script>
