<!-- eslint-disable vue/multi-word-component-names
 --><template>
  <div class="home">
    <login />
  </div>
</template>

<script>
import Home from '@/components/auth-components/home/HomeComponent.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home,
  },
};
</script>
