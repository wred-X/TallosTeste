<!-- eslint-disable vue/multi-word-component-names
 --><template>
  <div class="login">
    <login />
  </div>
</template>

<script>
import Login from '@/components/auth-components/login/LoginComponent.vue';

export default {
  components: {
    Login,
  },
};
</script>
