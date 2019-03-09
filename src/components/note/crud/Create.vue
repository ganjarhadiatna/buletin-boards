<template>
    <div>
        <div class="card-note-view">

            <div class="c-n-v-grid">
                

                <div class="c-n-v-col-1">

                    <div class="margin-bottom-20px">
                        <h1 class="txt-site txt-small txt-main txt-bold txt-capital">
                            Create Notes
                        </h1>
                        <p class="txt-site txt-11 txt-primary">
                            A notes can send to people buletin boards or to self buletin board
                        </p>
                    </div>

                    <div :class="clMainNote">

                        <div class="card-profile margin-20px">
                            <div class="c-p-col-1">
                                <div class="image image-full image-circle"></div>
                            </div>
                            <div class="c-p-col-2">
                                <div class="c-p-info">
                                    <div class="txt-site txt-12 txt-bold txt-white">
                                        Full Name
                                    </div>
                                    <div class="txt-site txt-10 txt-thin txt-white">
                                        Created on ?
                                    </div>
                                </div>
                            </div>
                            <div class="c-p-col-3">
                                <button 
                                    class="btn btn-circle btn-trans-color" 
                                    style="cursor: default;">
                                    <span class="txt-site txt-white fa fa-lg fa-ellipsis-h"></span>
                                </button>
                            </div>
                        </div>

                        <div class="margin-20px">
                            <input 
                                type="text" 
                                class="txt txt-trans-white-color txt-no-radius txt-site txt-standar" 
                                placeholder="Title">
                        </div>

                        <div class="margin-20px">
                            <textarea 
                                class="txt edit-text txt-trans-white-color txt-no-radius txt-site txt-14 txt-thin" 
                                style="min-height: 350px;"
                                placeholder="Descriptions"></textarea>
                        </div>

                        <!-- <div class="">
                            <input 
                                type="text" 
                                class="txt txt-trans-white-color txt-no-radius txt-site txt-12" 
                                placeholder="Link">
                        </div>

                        <div class="">
                            <input 
                                type="text" 
                                class="txt txt-trans-white-color txt-no-radius txt-site txt-12" 
                                placeholder="Tags">
                        </div> -->

                        <div class="padding-10px"></div>

                    </div>

                    <div class="padding-10px"></div>

                </div>

                <div class="c-n-v-col-2">

                    <div class="c-n-v-info c-n-v-fixed">

                        <div class="card-profile grid-2x">
                            <div class="c-p-col-1">
                                <div class="image image-full image-radius"></div>
                            </div>
                            <div class="c-p-col-2">
                                <div class="c-p-info">
                                    <div class="txt-site txt-12 txt-bold txt-main">
                                        Buletin Boards
                                    </div>
                                    <div class="txt-site txt-10 txt-thin txt-main">
                                        120 notes
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="c-n-v-block">
                            <div class="c-n-v-b-top">
                                Choose Theme
                            </div>
                            <div class="c-n-v-flex">
                                <div 
                                    class="card-color" 
                                    @click="changeColor('1')">
                                    <div class="c-c-cover color-1"></div>
                                </div>
                                <div 
                                    class="card-color"
                                    @click="changeColor('2')">
                                    <div class="c-c-cover color-2"></div>
                                </div>
                                <div 
                                    class="card-color" 
                                    @click="changeColor('1')">
                                    <div class="c-c-cover color-1"></div>
                                </div>
                                <div 
                                    class="card-color"
                                    @click="changeColor('2')">
                                    <div class="c-c-cover color-2"></div>
                                </div>
                            </div>
                        </div>

                        <div class="c-n-v-block">
                            <div class="c-n-v-b-top">
                                Link (optional)
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    class="txt txt-primary-color txt-color"
                                    placeholder="https://">
                            </div>
                        </div>

                        <div class="c-n-v-block">
                            <div class="c-n-v-b-top">
                                Tags (optional)
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    class="txt txt-primary-color txt-color"
                                    placeholder="tags1, tags2 .. tags n">
                            </div>
                        </div>

                        <div class="margin-10px">
                            <input 
                                type="button" 
                                class="btn btn-main3-color btn-width-all"
                                value="Save">
                        </div>

                        <div class="margin-10px">
                            <input 
                                type="button" 
                                class="btn btn-grey3-color btn-width-all"
                                value="Cancel"
                                @click="$goBack()">
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            clMainNote: 'c-n-v-note theme-1'
        }
    },
    methods: {
        changeColor (val) {
            if (val == '1') {
                this.clMainNote = 'c-n-v-note theme-1'
            }
            if (val == '2') {
                this.clMainNote = 'c-n-v-note theme-2'
            }
        }
    }
}
</script>
