<template>
  <v-text-field :label="titulo" :value="value" :required="required" :rules="regras"></v-text-field>
</template>

<script>
export default {
    props: ["titulo", "value", "required", "regras"],
};
</script>

<style>

</style>