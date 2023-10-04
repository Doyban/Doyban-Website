<script lang="ts" setup>
import { ref, Ref } from 'vue'
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
        inputValue,
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
const inputFields: any = [
  {
    appendInnerIcon: 'mdi-account',
    counter: 64,
    hint: 'Write your first name.',
    placeholder: 'Your first name',
    slotText: 'First name',
    rules: contactFormRules.firstName,
    variant: 'outlined',
    vModel: contactForm.value.firstName,
  },
  {
    appendInnerIcon: 'mdi-account-check',
    counter: 64,
    hint: 'Write your last name.',
    placeholder: 'Your last name',
    slotText: 'Last name',
    rules: contactFormRules.lastName,
    variant: 'outlined',
    vModel: contactForm.value.lastName,
  },
  {
    appendInnerIcon: 'mdi-at',
    counter: 512,
    hint: 'Provide a valid email address.',
    placeholder: 'Your email',
    slotText: 'Email',
    rules: contactFormRules.email,
    variant: 'outlined',
    vModel: contactForm.value.email,
  },
  {
    appendInnerIcon: 'mdi-information-outline',
    counter: 128,
    hint: 'The subject of your message.',
    placeholder: 'Subject',
    slotText: 'Subject',
    rules: contactFormRules.subject,
    variant: 'outlined',
    vModel: contactForm.value.subject,
  },
]

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
  contactForm.value?.reset()
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
    'success',
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
        <v-img alt="" cover height="100%" src="pages/contact.webp" />
      </v-col>
      <v-row class="mx-3 my-12" justify="center">
        <v-col cols="12" md="10">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 24 : 12"
                class="elevation-24"
                v-bind="props"
              >
                <v-form
                  ref="contactForm"
                  v-model="isContactFormValid"
                  @submit.prevent="onSubmit"
                >
                  <v-container>
                    <h1 class="my-12 text-center">Contact</h1>
                    <v-text-field
                      v-for="inputField in inputFields"
                      :key="inputField"
                      :append-inner-icon="inputField.appendInnerIcon"
                      :counter="inputField.counter"
                      :hint="inputField.hint"
                      :placeholder="inputField.placeholder"
                      :rules="inputField.rules"
                      :variant="inputField.variant"
                      :v-model="inputField.vModel"
                      clearable
                      color="purple-darken-4"
                      loading
                    >
                      <!-- Slot for "v-text-field". -->
                      <template #label
                        ><span class="text-red"><strong>*&nbsp;</strong></span
                        >{{ inputField.slotText }}</template
                      >
                      <!--/ Slot for "v-text-field". -->
                    </v-text-field>
                    <!-- This one needs to stay on v-bind, otherwise it doesn't keep the message in the textarea and doesn't count correctly the number of words. -->
                    <v-textarea
                      :counter="8192"
                      :rules="contactFormRules.message"
                      append-inner-icon="mdi-lead-pencil"
                      clearable
                      color="purple-darken-4"
                      hint="Write about what you have to say to us."
                      loading
                      placeholder="Message content"
                      v-bind="contactForm.message"
                      variant="outlined"
                    >
                      <!-- Slot for "v-textarea". -->
                      <template #label
                        ><span class="text-red"><strong>*&nbsp;</strong></span
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
                      color="purple-darken-4"
                      hint="Select the topics you are contacting us about. If 'Other', you can write it down."
                      multiple
                      persistent-hint
                      placeholder="What brings you to us?"
                      v-model="contactForm.contactType"
                      variant="outlined"
                    >
                    </v-combobox>
                    <span class="text-red"><strong>*&nbsp;</strong></span>
                    <!-- TODO: This needs to be fixed why v-bind (at least v-bind should work)/model (should be v-model) doesn't work here. -->
                    <v-checkbox
                      @click="contactForm.terms = !contactForm.terms"
                      :rules="contactFormRules.acceptedTerms"
                      class="mt-n9 ml-n1"
                      color="purple-darken-4"
                      v-model="contactForm.terms"
                    >
                      {{ contactForm.terms }}
                      <template v-slot:label>
                        <div @click.stop>
                          Do you accept the
                          <v-tooltip location="bottom">
                            <template v-slot:activator="{ props }">
                              <NuxtLink
                                @click.stop="terms = true"
                                href="javascript:;"
                                v-bind="props"
                              >
                                Terms
                              </NuxtLink>
                            </template>
                            Opens a dialog with Terms
                          </v-tooltip>
                          and
                          <v-tooltip location="bottom">
                            <template v-slot:activator="{ props }">
                              <NuxtLink
                                @click.stop="privacy = true"
                                href="javascript:;"
                                v-bind="props"
                                >Privacy Policy
                              </NuxtLink> </template
                            >Opens a dialog with Privacy Policy </v-tooltip
                          >?
                        </div>
                      </template>
                    </v-checkbox>
                    <span class="text-red"><strong>*&nbsp;</strong></span>
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
                      variant="plain"
                      >Reset</v-btn
                    >
                    <v-btn
                      :disabled="!isContactFormValid || !isRecaptchaValid"
                      color="purple-darken-4"
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
                    <template v-slot:default="{ isHovering2, props2 }">
                      <v-card
                        :class="{ 'on-hover': isHovering2 }"
                        :elevation="isHovering2 ? 24 : 12"
                        class="elevation-24"
                        ripple
                        v-bind="props2"
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
                            color="purple-darken-4"
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
                    <template v-slot:default="{ isHovering2, props2 }">
                      <v-card
                        :class="{ 'on-hover': isHovering2 }"
                        :elevation="isHovering2 ? 24 : 12"
                        class="elevation-24"
                        ripple
                        v-bind="props2"
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
                            color="purple-darken-4"
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
.v-card {
  border-radius: 24px 4px;
}

.v-text-field {
  padding-bottom: 1rem;
}
:deep() {
  .v-field__outline__start {
    border-radius: 1rem 0 0 0 !important;
  }
  .v-field__outline__end {
    border-radius: 0 2rem 0 0 !important;
  }
}

.v-dialog {
  @media only screen and (min-width: 991px) {
    width: 50%;
  }
}
</style>
