<template>
    <div>
        <div class="margin-bottom-20px">
            <card-menu :nav="'categories'"></card-menu>
        </div>

        <!-- notes -->
        <div class="a-b-block">
            <div class="a-b-b-mid">
                <card-category></card-category>
                <card-category></card-category>
            </div>
        </div>

    </div>
</template>

<script>
import cardMenu from '@/components/search/Menu'
import cardCategory from '@/components/category/CardBig'

export default {
    components: {
        'card-category': cardCategory,
        'card-menu': cardMenu
    }
}
</script>

