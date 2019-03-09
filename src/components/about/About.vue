<template>
    <div>

        <div class="padding-5px"></div>

        <card-baner></card-baner>
        
        <div class="padding-15px"></div>

        <card-footer></card-footer>

    </div>
</template>
<script>
import cardBaner from '@/components/main/Baner'
import cartFooter from '@/components/main/Footer'
export default {
    components: {
        'card-baner': cardBaner,
        'card-footer': cartFooter,
    }
}
</script>