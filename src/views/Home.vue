<template>
<div class="home">
    <el-button type="primary" @click="$router.push('/form')">晨检</el-button>
    <el-button type="success" @click="$router.push('/form2')">晚检</el-button>
</div>
</template>

<script>
export default {
    name: 'Home',
    components: {

    }
}
</script>
