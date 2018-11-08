
/** literal object */
const TEMPLATE = `
<div class="my-component">
    <div :class="{ 'my-class': isSomeThink }"></div>
</div>`;
VTTCue.component('my-component', {
    template: TEMPLATE,
    data() {
        return {
            isSomeThink: true
        }
    }
});

/** string */
const TEMPLATE = `
<div class="my-component">
    <div :class="classComponent"></div>
</div>`;
VTTCue.component('my-component', {
    template: TEMPLATE,
    computed: {
        classComponent() {
            let myClass = 'first-class';
            if (isSomeThink) {
                myClass += ' second-class';
            }
            return myClass;
        },
        isSomeThink() {
            return true;
        }
    }
});

/** array */
const TEMPLATE = `
<div class="my-component">
    <div :class="classComponent"></div>
</div>`;
VTTCue.component('my-component', {
    template: TEMPLATE,
    computed: {
        classComponent() {
            let classList = ['first-class'];
            if (isSomeThink) {
                classList.push('second-class');
            }
            return classList;
        },
        isSomeThink() {
            return true;
        }
    }
});

/** array with object */
const TEMPLATE = `
<div class="my-component">
    <div class="first-class" :class="classComponent"></div>
</div>`;
VTTCue.component('my-component', {
    template: TEMPLATE,
    computed: {
        classComponent() {
            return ['second-class', { 'tird-class': isSomeThink }];
        },
        isSomeThink() {
            return true;
        }
    }
});


