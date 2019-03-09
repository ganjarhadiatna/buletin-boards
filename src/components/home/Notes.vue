<template>
    <div>

        <div class="a-b-block">
            <div class="a-b-b-top">
                <div class="col-1">
                    <card-menu></card-menu>
                </div>
                <div class="col-2">
                    <div class="navigator nav-theme-3 nav-all" style="float: right;">
                        <ul>
                            <li>
                                <span class="fa fa-lg fa-th-large"></span>
                            </li>
                            <!-- <li>
                                <span class="fa fa-lg fa-th-list"></span>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
            <div class="a-b-b-mid">
                <card-note></card-note>
                <div class="width width-center" style="text-align: center;">
                    <button class="btn btn-grey3-color margin-top-20px">
                        <span>Load More</span>
                    </button>
                </div>
            </div>
        </div>

        
    </div>
</template>
<script>
import cardMenu from '@/components/home/Menu'
import cardNote from '@/components/note/Card'

export default {
    components: {
        'card-menu': cardMenu,
        'card-note': cardNote,
    }
}
</script>