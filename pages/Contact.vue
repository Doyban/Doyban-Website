<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import Swal from 'sweetalert2'
import Privacy from './Privacy.vue'
import Terms from './Terms.vue'

const contactForm: Ref = ref({
  contactType: '',
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  subject: '',
  terms: false,
})
const contactFormReactive = reactive({...contactForm});
const contactFormRules = {
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
}
const contactType: string[] = ['Careers', 'Games', 'Investment', 'Other']
const isContactFormValid: Ref<boolean> = ref(false)
let isRecaptchaValid = false
const privacy: Ref<boolean> = ref(false)
const terms: Ref<boolean> = ref(false)

function onRecaptchaExpired(): void {
  isRecaptchaValid = false
}
function onRecaptchaVerified(): void {
  isRecaptchaValid = true
}

const onReset = () => {
  // const contactFormRef: any = contactForm.reset()
  // contactFormRef.reset()
  Object.assign(contactFormReactive, contactForm);
  console.log(contactForm.value)
}

function onSubmit(): void {
  $mail.send({
    from: 'Daniel',
    subject: 'Incredible',
    text: 'This is an incredible test message',
  })
  Swal.fire(
    'Awesome!',
    "We've received your mail, will get back to you A.S.A.P.",
    'success'
  )
  onReset()
}

useHead({
  title: 'Contact',
})
</script>

<template>
  <section>
    <v-row>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img src="pages/contact.webp" height="100%" />
      </v-col>
      <v-row class="mx-3 my-12" justify="center">
        <v-col cols="12" md="10">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                :class="{ 'on-hover': hover }"
                :elevation="hover ? 24 : 12"
                class="elevation-24"
                outlined
                shaped
              >
                <v-form
                  ref="contactForm"
                  v-bind="isContactFormValid"
                  @submit.prevent="onSubmit"
                >
                  <v-container>
                    <h1 class="my-12 text-center">Contact</h1>
                    <!-- TODO: Make the text fields in a "for" loop. -->
                    <v-text-field
                      :counter="64"
                      :rules="contactFormRules.firstName"
                      append-inner-icon="mdi-account"
                      clearable
                      color="purple darken-4"
                      hint="Write your first name."
                      loading
                      placeholder="Your first name"
                      v-bind="contactForm.firstName"
                      variant="outlined"
                    >
                      <!-- Slot for "v-text-field". -->
                      <template #label
                        ><span class="red--text"><strong>* </strong></span>First
                        name</template
                      >
                      <!--/ Slot for "v-text-field". -->
                    </v-text-field>
                    <v-text-field
                      :counter="64"
                      :rules="contactFormRules.lastName"
                      append-inner-icon="mdi-account-check"
                      clearable
                      color="purple darken-4"
                      hint="Write your last name."
                      loading
                      placeholder="Your last name"
                      v-bind="contactForm.lastName"
                      variant="outlined"
                    >
                      <!-- Slot for "v-text-field". -->
                      <template #label
                        ><span class="red--text"><strong>* </strong></span>Last
                        name</template
                      >
                      <!--/ Slot for "v-text-field". -->
                    </v-text-field>
                    <v-text-field
                      :counter="512"
                      :rules="contactFormRules.email"
                      append-inner-icon="mdi-at"
                      clearable
                      color="purple darken-4"
                      hint="Provide a valid email address."
                      loading
                      placeholder="Your email"
                      v-bind="contactForm.email"
                      variant="outlined"
                    >
                      <!-- Slot for "v-text-field". -->
                      <template #label
                        ><span class="red--text"><strong>* </strong></span
                        >Email</template
                      >
                      <!--/ Slot for "v-text-field". -->
                    </v-text-field>
                    <v-text-field
                      :counter="128"
                      :rules="contactFormRules.subject"
                      append-inner-icon="mdi-information-outline"
                      clearable
                      color="purple darken-4"
                      hint="The subject of your email."
                      loading
                      placeholder="Subject"
                      v-bind="contactForm.subject"
                      variant="outlined"
                    >
                      <!-- Slot for "v-text-field". -->
                      <template #label
                        ><span class="red--text"><strong>* </strong></span
                        >Subject</template
                      >
                      <!--/ Slot for "v-text-field". -->
                    </v-text-field>
                    <v-textarea
                      :counter="8192"
                      :rules="contactFormRules.message"
                      append-inner-icon="mdi-lead-pencil"
                      clearable
                      color="purple darken-4"
                      hint="Write about what you have to say to us."
                      loading
                      placeholder="Message content"
                      v-bind="contactForm.message"
                      variant="outlined"
                    >
                      <!-- Slot for "v-textarea". -->
                      <template #label
                        ><span class="red--text"><strong>* </strong></span
                        >Message</template
                      >
                      <!--/ Slot for "v-textarea". -->
                    </v-textarea>
                    <v-combobox
                      :items="contactType"
                      append-inner-icon="mdi-thought-bubble-outline"
                      chips
                      clearable
                      closable-chips
                      color="purple darken-4"
                      hint="Select the topics you are contacting us about. If 'Other', you can write it down."
                      multiple
                      persistent-hint
                      placeholder="What brings you to us?"
                      v-bind="contactForm.contactType"
                      variant="outlined"
                    >
                    </v-combobox>
                    <span class="red--text"><strong>* </strong></span>
                    <v-checkbox
                      :rules="contactFormRules.terms"
                      class="mt-n9 ml-n1"
                      color="purple darken-4"
                      v-bind="contactForm.terms"
                    >
                      <template v-slot:label>
                        <div @click.stop>
                          Do you accept the
                          <v-tooltip location="bottom">
                            <template v-slot:activator="{ props }">
                              <a
                                @click.stop="terms = true"
                                href="javascript:;"
                                v-bind="props"
                              >
                                Terms
                              </a>
                            </template>
                            Opens a dialog with Terms</v-tooltip
                          >
                          and
                          <v-tooltip location="bottom">
                            <template v-slot:activator="{ props }">
                              <a
                                @click.stop="privacy = true"
                                href="javascript:;"
                                v-bind="props"
                                >Privacy Policy
                              </a> </template
                            >Opens a dialog with Privacy Policy </v-tooltip
                          >?
                        </div>
                      </template>
                    </v-checkbox>
                    <span class="red--text"><strong>* </strong></span>
                    <recaptcha
                      class="mt-n9 ml-2"
                      @expired="onRecaptchaExpired"
                      @success="onRecaptchaVerified"
                    />
                  </v-container>
                  <v-card-actions>
                    <v-btn
                      @click="onReset"
                      elevation="6"
                      ripple
                      size="large"
                      variant="text"
                      >Reset</v-btn
                    >
                    <!-- :disabled="isContactFormValid || isRecaptchaValid" -->
                    <v-btn
                      color="purple darken-4"
                      elevation="6"
                      ripple
                      size="large"
                      type="submit"
                      variant="tonal"
                    >
                      Send
                    </v-btn>
                  </v-card-actions>
                </v-form>
                <v-dialog v-model="terms">
                  <v-hover>
                    <template v-slot:default="{ hover2 }">
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
                          <v-btn
                            @click="terms = false"
                            color="purple darken-4"
                            elevation="6"
                            ripple
                            size="large"
                            variant="tonal"
                            >Ok
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </template></v-hover
                  >
                </v-dialog>
                <v-dialog v-model="privacy">
                  <v-hover>
                    <template v-slot:default="{ hover2 }">
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
                            @click="privacy = false"
                            color="purple darken-4"
                            elevation="6"
                            ripple
                            size="large"
                            variant="tonal"
                            >Ok</v-btn
                          >
                        </v-card-actions>
                      </v-card></template
                    ></v-hover
                  >
                </v-dialog>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-row>
  </section>
</template>

<style lang="scss" scoped>
.v-text-field {
  padding-bottom: 1rem;
}
:deep() {
  .v-field__outline__start {
    border-radius: 1rem 0 0 0!important;
  }
  .v-field__outline__end {
    border-radius: 0 2rem 0 0!important;
  }
}

.v-dialog {
  @media only screen and (min-width: 991px) {
    width: 50%;
  }
}
</style>
