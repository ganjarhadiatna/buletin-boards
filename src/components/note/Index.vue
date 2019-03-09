<template>
    <div>
        <div class="a-b-header">
            <h1>Explore</h1>
            <p>Explore our free popular Notes</p>
        </div>
        <!-- Trandings -->
        <div class="a-b-block">
            <div class="a-b-b-mid">
                <card-tag></card-tag>
            </div>
        </div>
        <div class="a-b-block">
            <!-- <div class="a-b-b-top">
                <div class="col-1">
                    <div class="navigator nav-theme-2 nav-all">
                        <ul>
                            <li class="active">Popular</li>
                            <li>Fresh</li>
                            <li>Top</li>
                        </ul>
                    </div>
                </div>
                <div class="col-2">
                    <div 
                        class="navigator nav-theme-2 nav-all"
                        style="float: right; right: 0;">
                        <ul>
                            <li class="active">
                                <span class="fa fa-lg fa-th-large"></span>
                            </li>
                            <li>
                                <span class="fa fa-lg fa-th-list"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> -->
            <div class="a-b-b-mid">
                <card-note></card-note>
                <card-note></card-note>
                <card-note></card-note>
            </div>
        </div>
    </div>
</template>
<script>
import cardNote from '@/components/note/Card'
import cardTag from '@/components/tag/Card'

export default {
    components: {
        'card-note': cardNote,
        'card-tag': cardTag,
    }
}
</script>
