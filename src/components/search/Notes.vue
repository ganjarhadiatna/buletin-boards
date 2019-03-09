<template>
    <div>
        <div class="margin-bottom-20px">
            <card-menu :nav="'notes'"></card-menu>
        </div>

        <!-- notes -->
        <div class="a-b-block">
            <div class="a-b-b-mid">
                <card-note></card-note>
            </div>
        </div>

    </div>
</template>

<script>
import cardMenu from '@/components/search/Menu'
import cardNote from '@/components/note/Card'

export default {
    components: {
        'card-note': cardNote,
        'card-menu': cardMenu
    }
}
</script>

