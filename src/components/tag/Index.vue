<template>
    <div>

        <div class="app-setting">

            <div class="col-1">
                <div class="a-s-fixed theme-3">
                    <div 
                        style="padding-left: 13px;"
                        class="txt-site txt-bold txt-14 txt-main margin-5px">
                        Trending Nows
                    </div>
                    <div>
                        <card-tag></card-tag>
                    </div>
                </div>
            </div>

            <div class="col-2">

                <div class="margin-10px">
                    <h1 class="txt-site txt-small txt-main txt-bold">
                        Explore Notes
                    </h1>
                    <p class="txt-site txt-11 txt-primary txt-thin">
                        Explore our free popular Notes
                    </p>
                </div>

                <!-- <h3>{{ ctr }}</h3> -->
                <div class="a-b-block">
                    <div class="a-b-b-mid">
                        <card-note></card-note>
                        <card-note></card-note>
                        <card-note></card-note>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import cardNote from '@/components/note/CardBig'
import cardTag from '@/components/tag/CardSmall'

export default {
    components: {
        'card-note': cardNote,
        'card-tag': cardTag
    }
}
</script>