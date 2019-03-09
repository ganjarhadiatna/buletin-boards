<template>
    <div>
        <div class="margin-bottom-20px">
            <card-menu :nav="'boards'"></card-menu>
        </div>

        <!-- notes -->
        <div class="a-b-block">
            <div class="a-b-b-mid">
                <card-buletin></card-buletin>
                <card-buletin></card-buletin>
            </div>
        </div>

    </div>
</template>

<script>
import cardMenu from '@/components/search/Menu'
import cardBuletin from '@/components/buletin/Card'

export default {
    components: {
        'card-buletin': cardBuletin,
        'card-menu': cardMenu
    }
}
</script>

