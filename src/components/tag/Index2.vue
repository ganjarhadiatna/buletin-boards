<template>
    <div>

        <div class="a-b-header">
            <h1>Tranding Nows</h1>
            <p>Here are a few of categories</p>
        </div>

        <!-- Trandings -->
        <div class="a-b-block">
            <div class="a-b-b-mid">
                <card-tag></card-tag>
            </div>
        </div>

        <div class="a-b-block">
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
import cardNote from '@/components/note/Card'
import cardTag from '@/components/tag/Card'

export default {
    components: {
        'card-note': cardNote,
        'card-tag': cardTag,
    }
}
</script>