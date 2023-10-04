<script lang="ts" setup>
// !IMPORTANT: It has to stay as "/privacy" due to compatibility with old Privacy Policy links.
// TODO: Add Animate on Scroll (AOL).
import Policy from '../interfaces/Policy'

interface Props {
  columnsDividerXs: number
  columnsDividerSm: number
  columnsBodyMd: number
}
const props = defineProps<Props>()

const policies: Policy[] = [
  {
    description:
      "By accessing the Website at <a aria-label='https://doyban.com. Click here to get redirected to our home page.' href='/' onclick='event.preventDefault(); app._router.push('/');' target='_self' title='https://doyban.com'>https://doyban.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this Website are protected by applicable copyright and trademark law.",
    title: 'Terms',
  },
  {
    description:
      'Permission is granted to temporarily download one copy of the materials (information or software) on Doyban’s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:<ul><li>modify or copy the materials;</li><li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li><li>attempt to decompile or reverse engineer any software contained on Doyban’s Website;</li><li>remove any copyright or other proprietary notations from the materials; or</li><li>transfer the materials to another person or “mirror” the materials on any other server.</li></ul>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Doyban at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.',
    title: 'Use License',
  },
  {
    description:
      'The materials on Doyban’s Website are provided on an ‘as is’ basis. Doyban makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.<br>Further, Doyban does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this site.',
    title: 'Disclaimer',
  },
  {
    description:
      'In no event shall Doyban or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Doyban’s Website, even if Doyban or a Doyban authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.',
    title: 'Limitations',
  },
  {
    description:
      'The materials appearing on Doyban’s Website could include technical, typographical, or photographic errors. Doyban does not warrant that any of the materials on its Website are accurate, complete or current. Doyban may make changes to the materials contained on its Website at any time without notice. However Doyban does not make any commitment to update the materials.',
    title: 'Accuracy of materials',
  },
  {
    description:
      'Doyban has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Doyban of the site. Use of any such linked Website is at the user’s own risk.',
    title: 'Links',
  },
  {
    description:
      'Doyban may revise these terms of service for its Website at any time without notice. By using this Website you are agreeing to be bound by the then current version of these terms of service.',
    title: 'Modifications',
  },
  {
    description:
      'These terms and conditions are governed by and construed in accordance with the laws of Irysowa 18, 55-220 Jelcz-Laskowice, PL-DS and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.',
    title: 'Governing Law',
  },
  {
    description:
      'Your privacy is important to us.<br>It is Doyban’s policy to respect your privacy regarding any information we may collect while operating our Website. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information. We have outlined our privacy policy below.<ul><li>we will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned;</li><li>before or at the time of collecting personal information, we will identify the purposes for which information is being collected;</li><li>we will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, unless we obtain the consent of the individual concerned or as required by law;</li><li>personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date;</li><li>we will protect personal information by using reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification;</li><li>we will make readily available to customers information about our policies and practices relating to the management of personal information;</li><li>we will only retain personal information for as long as necessary for the fulfillment of those purposes;</li><li>or deletion requests, we will take reasonable measures to delete your personal data from our records. We will keep certain records (e.g., personal data relating to payments or customer service matters) where we need (and have rights), such as for legal or accounting purposes. We will also keep data in order to exercise, defend, or establish our rights. Please use the contact form on our Website to contact us regarding deleting your data.</li></ul>We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. Doyban may change this privacy policy from time to time at Doyban’s sole discretion.',
    title: 'Privacy Policy',
  },
]

useHead({
  title: 'Privacy Policy',
})
</script>

<template>
  <section class="mx-3">
    <h1 class="mt-12 text-center">Privacy Policy</h1>
    <v-row justify="center">
      <v-col
        :cols="props.columnsDividerXs ?? 6"
        :sm="props.columnsDividerSm ?? 3"
      >
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col :md="props.columnsBodyMd ?? 6" class="ma-8" cols="12">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              :class="{
                'on-hover': isHovering,
              }"
              :elevation="isHovering ? 24 : 12"
              class="pb-6"
              v-bind="props"
            >
              <v-list-item v-for="(policy, index) in policies" :key="index">
                <v-list-item-title class="mb-3 text-center"
                  ><strong>{{ policy.title }}</strong></v-list-item-title
                >
                <v-list-item-subtitle
                  class="text-wrap"
                  v-html="policy.description"
                />
              </v-list-item>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </section>
</template>
