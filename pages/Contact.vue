<template>
  <section>
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/static/pages/contact.webp')" height="100%" />
      </v-flex>
      <v-layout justify-center my-12 mx-3>
        <v-flex md10 xs12>
          <v-hover v-slot:default="{ hover }">
            <v-card
              :class="{ 'on-hover': hover }"
              :elevation="hover ? 24 : 12"
              class="elevation-24"
              outlined
              shaped
            >
              <v-form
                ref="contactForm"
                v-model="isContactFormValid"
                @submit.prevent="onSubmit"
              >
                <v-container>
                  <h1 class="my-12 text-center">Contact</h1>
                  <!-- TODO: Make the text fields in a "for" loop. -->
                  <v-text-field
                    v-model="contactForm.firstName"
                    :counter="64"
                    :rules="contactFormRules.firstName"
                    append-icon="mdi-account"
                    clearable
                    color="purple darken-4"
                    hint="Write your first name."
                    loading
                    outlined
                    placeholder="Your first name"
                    shaped
                  >
                    <!-- Slot for "v-text-field". -->
                    <template #label
                      ><span class="red--text"><strong>* </strong></span>First
                      name</template
                    >
                    <!--/ Slot for "v-text-field". --> </v-text-field
                  ><v-text-field
                    v-model="contactForm.lastName"
                    :counter="64"
                    :rules="contactFormRules.lastName"
                    append-icon="mdi-account-check"
                    clearable
                    color="purple darken-4"
                    hint="Write your last name."
                    loading
                    outlined
                    placeholder="Your last name"
                    shaped
                  >
                    <!-- Slot for "v-text-field". -->
                    <template #label
                      ><span class="red--text"><strong>* </strong></span>Last
                      name</template
                    >
                    <!--/ Slot for "v-text-field". --> </v-text-field
                  ><v-text-field
                    v-model="contactForm.email"
                    :counter="512"
                    :rules="contactFormRules.email"
                    append-icon="mdi-at"
                    clearable
                    color="purple darken-4"
                    hint="Provide a valid email address."
                    loading
                    outlined
                    placeholder="Your email"
                    shaped
                  >
                    <!-- Slot for "v-text-field". -->
                    <template #label
                      ><span class="red--text"><strong>* </strong></span
                      >Email</template
                    >
                    <!--/ Slot for "v-text-field". --> </v-text-field
                  ><v-text-field
                    v-model="contactForm.subject"
                    :counter="128"
                    :rules="contactFormRules.subject"
                    append-icon="mdi-information-outline"
                    clearable
                    color="purple darken-4"
                    hint="The subject of your email."
                    loading
                    outlined
                    placeholder="Subject"
                    shaped
                  >
                    <!-- Slot for "v-text-field". -->
                    <template #label
                      ><span class="red--text"><strong>* </strong></span
                      >Subject</template
                    >
                    <!--/ Slot for "v-text-field". -->
                  </v-text-field>
                  <v-textarea
                    v-model="contactForm.message"
                    :counter="8192"
                    :rules="contactFormRules.message"
                    append-icon="mdi-lead-pencil"
                    clearable
                    color="purple darken-4"
                    hint="Write about what you have to say to us."
                    loading
                    outlined
                    placeholder="Message content"
                    shaped
                  >
                    <!-- Slot for "v-text-field". -->
                    <template #label
                      ><span class="red--text"><strong>* </strong></span
                      >Message</template
                    >
                    <!--/ Slot for "v-text-field". -->
                  </v-textarea>
                  <v-select
                    v-model="contactForm.contactType"
                    :items="contactType"
                    color="purple darken-4"
                    append-icon="mdi-thought-bubble-outline"
                    clearable
                    outlined
                    placeholder="What brings you to us?"
                    shaped
                  >
                  </v-select>
                  <span class="red--text"><strong>* </strong></span>
                  <v-checkbox
                    v-model="contactForm.terms"
                    :rules="contactFormRules.terms"
                    class="mt-n6 ml-2"
                    color="purple darken-4"
                  >
                    <template v-slot:label>
                      <div @click.stop>
                        Do you accept the
                        <a href="javascript:;" @click.stop="terms = true"
                          >Terms</a
                        >
                        and
                        <a href="javascript:;" @click.stop="privacy = true"
                          >Privacy Policy</a
                        >?
                      </div>
                    </template>
                  </v-checkbox>
                  <span class="red--text"><strong>* </strong></span>

                  <!-- <vue-recaptcha
                  ref="recaptcha"
                  class="mt-n6 ml-2"
                  sitekey="zzz"
                  @verify="isRecaptchaVerified"
                ></vue-recaptcha> -->
                  <recaptcha
                    class="mt-n6 ml-3"
                    @expired="onRecaptchaExpired"
                    @success="onRecaptchaVerified"
                  />
                </v-container>
                <v-card-actions>
                  <v-btn text @click="onReset">Reset</v-btn>
                  <v-btn
                    :disabled="!isContactFormValid || !isRecaptchaValid"
                    text
                    color="purple darken-4"
                    type="submit"
                  >
                    Send
                  </v-btn>
                </v-card-actions>
              </v-form>
              <v-dialog v-model="terms" width="50%">
                <v-hover v-slot:default="{ hover2 }">
                  <v-card
                    :class="{ 'on-hover': hover2 }"
                    :elevation="hover2 ? 24 : 12"
                    class="elevation-24"
                    outlined
                    ripple
                    shaped
                  >
                    <v-card-text
                      ><Terms
                        :columnsDividerXs="12"
                        :columnsDividerSm="6"
                        :columnsBodyMd="12"
                    /></v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn text color="purple darken-4" @click="terms = false"
                        >Ok</v-btn
                      >
                    </v-card-actions>
                  </v-card></v-hover
                >
              </v-dialog>
              <v-dialog v-model="privacy" width="50%">
                <v-hover v-slot:default="{ hover2 }">
                  <v-card
                    :class="{ 'on-hover': hover2 }"
                    :elevation="hover2 ? 24 : 12"
                    class="elevation-24"
                    outlined
                    ripple
                    shaped
                  >
                    <v-card-text
                      ><Privacy
                        :columnsDividerXs="12"
                        :columnsDividerSm="6"
                        :columnsBodyMd="12"
                    /></v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        text
                        color="purple darken-4"
                        @click="privacy = false"
                        >Ok</v-btn
                      >
                    </v-card-actions>
                  </v-card></v-hover
                >
              </v-dialog>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-layout>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Swal from 'sweetalert2'
import Privacy from './Privacy.vue'
import Terms from './Terms.vue'

export default Vue.extend({
  components: { Privacy, Terms },
  data() {
    return {
      isContactFormValid: false,
      isRecaptchaValid: false,
      contactType: ['Careers', 'Games', 'Investment', 'Other'],
      contactForm: {
        contactType: '',
        email: '',
        firstName: '',
        lastName: '',
        message: '',
        subject: '',
        terms: false,
      },
      contactFormRules: {
        acceptedTerms: [
          (inputValue: boolean) => inputValue === true || 'Terms are required.',
        ],
        email: [
          (inputValue: string) =>
            (inputValue || '').length > 0 || 'Email is required.',
          (inputValue: string) =>
            (inputValue || '').length >= 6 ||
            'Email has to have at least 6 characters.',
          (inputValue: string) =>
            (inputValue || '').length <= 512 ||
            'Email has to have at most 512 characters.',
          (inputValue: string) =>
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              inputValue
            ) || 'This is not correct email format.',
        ],
        firstName: [
          (inputValue: string) =>
            (inputValue || '').length > 0 || 'First name is required.',
          (inputValue: string) =>
            (inputValue || '').length >= 2 ||
            'First name has to have at least 2 characters.',
          (inputValue: string) =>
            (inputValue || '').length <= 64 ||
            'First name has to have at most 64 characters.',
        ],
        lastName: [
          (inputValue: string) =>
            (inputValue || '').length > 0 || 'Last name is required.',
          (inputValue: string) =>
            (inputValue || '').length >= 2 ||
            'Last name has to have at least 2 characters.',
          (inputValue: string) =>
            (inputValue || '').length <= 64 ||
            'Last name has to have at most 64 characters.',
        ],
        message: [
          (inputValue: string) =>
            (inputValue || '').length > 0 || 'Message is required.',
          (inputValue: string) =>
            (inputValue || '').length >= 16 ||
            'Message has to have at least 16 characters.',
          (inputValue: string) =>
            (inputValue || '').length <= 8192 ||
            'Message has to have at most 8192 characters.',
        ],
        subject: [
          (inputValue: string) =>
            (inputValue || '').length > 0 || 'Subject is required.',
          (inputValue: string) =>
            (inputValue || '').length >= 2 ||
            'Subject has to have at least 2 characters.',
          (inputValue: string) =>
            (inputValue || '').length <= 128 ||
            'Subject has to have at most 128 characters.',
        ],
      },
      privacy: false,
      terms: false,
    }
  },
  methods: {
    onRecaptchaExpired(): void {
      this.isRecaptchaValid = false
    },
    onRecaptchaVerified(): void {
      this.isRecaptchaValid = true
    },
    onReset(): void {
      const contactFormRef: any = this.$refs.contactForm
      contactFormRef.reset()
      this.$recaptcha.reset()
    },
    onSubmit(): void {
      Swal.fire(
        'Awesome!',
        "We've received your mail, will get back to you A.S.A.P.",
        'success'
      )
      this.onReset()
    },
  },
})
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
}

.v-text-field {
  padding-bottom: 1rem;
}
</style>
