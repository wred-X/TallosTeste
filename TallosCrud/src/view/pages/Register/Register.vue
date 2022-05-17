<!-- eslint-disable vue/multi-word-component-names
 -->
<template>
  <div class="register">
    <login />
  </div>
</template>

<script>
import Register from '@/components/auth-components/register/RegisterComponent.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Register,
  },
};
</script>
