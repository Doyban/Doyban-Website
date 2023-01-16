<template>
  <section>
    <h1 class="mt-12 text-center">Terms of Service/Use/User Agreement/EULA</h1>
    <v-row class="justify-center">
      <v-col :sm="columnsDividerSm ?? 3" :xs="columnsDividerXs ?? 6">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="ma-8" :md="columnsBodyMd ?? 6" xs="12">
        <v-hover v-slot:default="{ hover }">
          <v-card
            :class="{
              'on-hover': hover,
            }"
            :elevation="hover ? 24 : 12"
            class="pb-6"
          >
            <v-list-item
              v-for="(policy, index) in policies"
              :key="index"
              two-line
            >
              <v-list-item-content>
                <v-list-item-title class="mb-3 text-center"
                  ><strong>{{ policy.title }}</strong></v-list-item-title
                >
                <v-list-item-subtitle
                  class="text-justify text-wrap"
                  v-html="policy.description"
                />
              </v-list-item-content>
            </v-list-item> </v-card></v-hover></v-col
    ></v-row>
  </section>
</template>

<script lang="ts">
// TODO: Add Animate on Scroll (AOL).
import Vue from 'vue'
import { Policy } from './interfaces/Policy'

export default Vue.extend({
  data() {
    return {
      policies: [] as Policy[],
    }
  },
  created() {
    this.policies = [
      {
        description:
          "<a aria-label='Terms. Click here to read more about Terms.' href='/terms' onclick='event.preventDefault(); app._router.push('/terms');' target='_self' title='Terms'>Terms</a> describe to the individuals (user, users, you, your) the rules that apply to our Assets: our Website  <a aria-label='https://doyban.com. Click here to get redirected to our home page.' href='/' onclick='event.preventDefault(); app._router.push('/');' target='_self' title='https://doyban.com'>https://doyban.com</a> with its applications, platforms, products, services, subdomains or Websites belonging to us with its content unless explicitly excluded by their terms of use.<br><br>These <a aria-label='Terms. Click here to read more about Terms.' href='/terms' onclick='event.preventDefault(); app._router.push('/terms');' target='_self' title='Terms'>Terms</a> are subject to our <a aria-label='Copyrights. Click here to read more about Copyrights.' href='/copyrights' onclick='event.preventDefault(); app._router.push('/copyrights');' target='_self' title='Copyrights'>Copyrights</a> as well as our <a aria-label='Privacy Policy. Click here to read more about Privacy Policy.' href='/privacy' onclick='event.preventDefault(); app._router.push('/privacy');' target='_self' title='Privacy Policy'>Privacy Policy</a>. By accessing and using our Website and Asset, you confirm that you agree with all these Legal Rules.<br><br><a aria-label='Terms. Click here to read more about Terms.' href='/terms' onclick='event.preventDefault(); app._router.push('/terms');' target='_self' title='Terms'>Terms</a> and any other legal information available on our Website are free of charge.",
        title: 'Introduction',
      },
      {
        description:
          "Doyban (<a aria-label='https://doyban.com. Click here to get redirected to our home page.' href='/' onclick='event.preventDefault(); app._router.push('/');' target='_self' title='https://doyban.com'>https://doyban.com</a>) is operated by and part of IBStructure Daniel Danielecki (company, Doyban, IBStructure Daniel Danielecki, our, us, we) &ndash; a company registered in Poland (European Union) under European registration number (VIES) PL9121899240. The Polish identification tax number (NIP) is 9121899240, while the business entity identification number (REGON) is 366592971.<br><br>You can contact us at our registered office, Irysowa 18, 55-220 Jelcz-Laskowice, Poland. Mail correspondence, please send to this address. Alternative contact is company business telephone <a aria-label='+48 732 280 741. Click here give us a phone call.' href='tel:+48 732 280 741' title='+48 732 280 741'>+48 732 280 741</a> or e-mail <a aria-label='contact@doyban.com. Click here to send us an e-mail.' href='mailto:contact@doyban.com?subject=Mail from doyban.com&body=Hi Doyban!%0D%0A%0D%0AMy mail is about:%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0ABest regards,%0D%0A' title='contact@doyban.com'>contact@doyban.com</a>.",
        title: 'About Doyban',
      },
      {
        description:
          "We may update our Website and our Assets, which means the content may change. It also includes the Legal Rules, i.e., <a aria-label='Copyrights. Click here to read more about Copyrights.' href='/copyrights' onclick='event.preventDefault(); app._router.push('/copyrights');' target='_self' title='Copyrights'>Copyrights</a>, <a aria-label='Privacy Policy. Click here to read more about Privacy Policy.' href='/privacy' onclick='event.preventDefault(); app._router.push('/privacy');' target='_self' title='Privacy Policy'>Privacy Policy</a>, and <a aria-label='Terms. Click here to read more about Terms.' href='/terms' onclick='event.preventDefault(); app._router.push('/terms');' target='_self' title='Terms'>Terms</a>. The newest versions hold for conflicts between the latest <a aria-label='Terms. Click here to read more about Terms.' href='/terms' onclick='event.preventDefault(); app._router.push('/terms');' target='_self' title='Terms'>Terms</a> and any historical versions. To keep updated and aware of our Legal Rules, we kindly ask you to check them regularly for any changes.<br><br>This Website and our Assets may contain integrations and links to other websites and/or services provided by third parties. We have no control over these websites and/or services. Therefore we assume no responsibility for the content served by those. Liabilities for damage or loss due to their usage have to be solved directly with them, and we cannot assist and/or help you with this. Inclusion of integration and/or link to another website and/or service does not imply any endorsement of them and/or people controlling them.<br><br>Information on our Website and Assets is related to our business activities. It has an informational nature only, pertinent to offering products of our partners and publishing educational content. Before taking any action on the content of our Website and/or Assets, you must obtain professional advice before taking it. Our content is not intended to advise you.<br><br>You are responsible for ensuring that everyone who accesses our Website and/or Assets through your internet connection is aware of our Legal Rules.<br><br>The waiver cannot be construed if any part of these <a aria-label='Terms. Click here to read more about Terms.' href='/terms' onclick='event.preventDefault(); app._router.push('/terms');' target='_self' title='Terms'>Terms</a> fails to exercise any right or remedy contained herein.<br><br>This <a aria-label='Terms. Click here to read more about Terms.' href='/terms' onclick='event.preventDefault(); app._router.push('/terms');' target='_self' title='Terms'>Terms</a> is an agreement between you and the company; rights to any third party cannot be and are not conferred.<br><br>User-generated content is not approved by us, which means our Assets may contain content uploaded by our users. Please get in touch with us if you would like to complain about the content because we cannot guarantee that it will always be approved and/or verified by us due to the high automatization of our Assets.<br><br>Linking from websites you do not own is forbidden, and you must not do it. You can link to our Assets, but you cannot do it so that the link redirects the user to a non-existing content and/or page. We reserve the right to withdraw linking permission without notice.",
        title: 'Disclaimers',
      },
      {
        description:
          "Our <a aria-label='Copyrights. Click here to read more about Copyrights.' href='/copyrights' onclick='event.preventDefault(); app._router.push('/copyrights');' target='_self' title='Copyrights'>Copyrights</a> and <a aria-label='Privacy Policy. Click here to read more about Privacy Policy.' href='/privacy' onclick='event.preventDefault(); app._router.push('/privacy');' target='_self' title='Privacy Policy'>Privacy Policy</a> also govern the use of this website. By accessing the website, you agree with them; please use the appropriate links to see their details.<br><br>With the upload of any data and/or material, you grant us an assignable, irrevocable, non-exclusive, paid-up, perpetual (or for the term of the protection), royalty-free, sublicensable, transferable. Worldwide license to such content for adapting, altering, broadcasting, changing, copying, data extraction/mining/scraping, decompiling, disassembling, distributing, downloading, editing, framing, hacking, lending, making a derivative work from, making available to the public, penetration testing, posting, rebranding, renting, repositioning, reproducing, republishing, reverse engineering, sublicensing, transmitting however we will need unless stated otherwise. We will treat this content as non-confidential and non-proprietary unless otherwise indicated.",
        title: 'Intellectual Property',
      },
      {
        description:
          'We cannot guarantee that our Assets will be free of bugs, viruses, vulnerabilities, and/or any other malicious Content.<br><br>You are responsible for cyber security configuration using your computer programs, information technology, and platform to access our Content. You should have your virus protection software.<br><br>Knowingly introducing bugs, logic bombs, malicious software, trojans, viruses, worms, and/or any Content which may be harmful is forbidden to all Assets belonging to us. Artificial intelligence-powered attack, brute-forcing, clickjacking, cookie forgery, cross-site request forgery, cross-site scripting, cryptographical analysis, data tampering, denial-of-service attack, distributed denial-of-service attack, eavesdropping, file upload attack, gathering our API keys, hacking, information gathering, injections (server-side, shell, SQL, query and others), introducing known vulnerabilities, man-in-the-middle attack, network and, server analysis, password attack, penetration testing, phishing, reconnaissance tools, scanning, session hijacking, spamming, stress testing, unauthorized access, violating our Content security policy, vulnerabilities assessment or any other attack and/or type of activity which might reveal our Content, network and server infrastructure or weakness about any of our Assets is a criminal offence under the Chapter 18 of the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and cooperate with them by providing your identity information. For scenarios of such a breach, your right to use our Assets will expire immediately.<br><br>You are responsible for the Content you are uploading to our Assets and its backing up and securing.<br><br>We grant rights to remove your Content partially and fully whenever we want without giving a valid reason.',
        title: 'Cyber Security',
      },
      {
        description:
          "Our <a aria-label='Privacy Policy. Click here to read more about Privacy Policy.' href='/privacy' onclick='event.preventDefault(); app._router.push('/privacy');' target='_self' title='Privacy Policy'>Privacy Policy</a> governs the use of the Website and/or our Assets, explaining how we may use your data.",
        title: 'Privacy',
      },
      {
        description:
          'Our Website and Assets are provided "as is" and on an "as available" basis.<br><br>We cannot guarantee that our Website and/or Assets and/or any content on it will always be free of defects and/or faults. We may suspend or withdraw our Website and/or Assets full and/or partially.<br><br>The company tries to keep the content up-to-date. However, we cannot give any guarantees and/or warranties that it will be always accurate.<br><br>You may access our Website and Assets by using a computer, laptop, or mobile device.<br><br>Technical requirements to have our Website and Assets running is its support for CSS, HTML, and JavaScript technologies.<br><br>We do our best to provide as high accessibility as possible but cannot guarantee that all of them will be compatible with the Web Content Accessibility Guidelines (WCAG).',
        title: 'Availability',
      },
      {
        description:
          'To the maximum extent permitted by law, we do not accept any liability for any direct and/or indirect partial and/or complete damage and/or loss of business interruption, income, profits, reputation, revenue, and/or any other valuable your asset, including the foreseeable ones.<br><br>Excluding personal injuries or deaths resulting from our negligence would be unlawful, and therefore, we do not exclude and/or limit them.',
        title: 'Limitations of Liability',
      },
    ]
  },
  props: {
    columnsDividerXs: Number,
    columnsDividerSm: Number,
    columnsBodyMd: Number,
  },
})
</script>
