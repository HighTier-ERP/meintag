const LocktonData = [
  //Need to change section header bold text into something other than text?
  {
    title: 'General Information',
    sections: [
      {
        sectionHeader: 'Company Information',
        text: 'PLEASE COMPLETE EACH SECTION.',
        groups: [
          {
            groupTitle: 'Name & address of firm',
            questions: [
              {
                question: 'Full name',
                type: 'string',
                uuid: '8k307l',
              },
              {
                question: 'Address',
                type: 'string',
                uuid: 'an7es1',
              },
              {
                question: 'City',
                type: 'string',
                uuid: 'lf64it',
              },
              {
                question: 'State',
                type: 'state',
                uuid: 'hfj2tq',
              },
              {
                question: 'ZIP/postcode',
                type: 'zip',
                uuid: 'd4ng54',
              },
              {
                question: 'Website',
                type: 'url',
                uuid: 'd0cfu5',
              },
            ],
            Muuid: 'm-2d4o62',
          },
          {
            groupTitle: 'Individual completing application form information',
            questions: [
              {
                question: 'Full name',
                type: 'string',
                uuid: '1iea54',
              },
              {
                question: 'Surname',
                type: 'string',
                uuid: 'q0j7bo',
              },
              {
                question: 'Email',
                type: 'email',
                uuid: 'ehrkik',
              },
            ],
            Muuid: 'm-5ggr8m',
          },
          {
            groupTitle:
              "Applicant's principal contact in the event of a security or privacy breach",
            questions: [
              {
                question: 'Name',
                type: 'string',
                uuid: '4tdusf',
              },
              {
                question: 'Email',
                type: 'email',
                uuid: 'nahpf8',
              },
              {
                question: 'Title',
                type: 'string',
                uuid: '3js620',
              },
              {
                question: 'Phone',
                type: 'phone',
                uuid: 'o9uv9i',
              },
            ],
            Muuid: 'm-9idebk',
          },
          {
            groupTitle: 'Type of business',
            questions: [
              {
                question: null,
                type: ['checkbox', 'string'],
                options: ['Sole proprietor', 'Corporation', 'Partnership', 'Other'],
                uuid: 'g75a07',
              },
              {
                question: 'Date established',
                type: 'date',
                uuid: 'nqvm9p',
              },
              {
                question: 'Business description',
                type: 'blob',
                uuid: 'nj19q1',
              },
            ],
            Muuid: 'm-9hm2q9',
          },
        ],
      },
      {
        sectionHeader: 'ANNUAL REVENUES',
        groups: [
          {
            text: '<b>Healthcare applicants:</b> Please provide net patient services revenues. All other applicants — please provide gross revenues.',
            questions: [
              {
                headers: [
                  null,
                  'Last complete financial year',
                  'Current year (estimate)',
                  'Next year (estimate)',
                ],
                labels: ['U.S. revenue', 'International revenue', 'Gross profits'],
                type: ['money', 'money', 'money'],
              },
              {
                question:
                  'Do you generate revenues and have a presence i.e. "an establishment" in territories outside the U.S.?',
                type: 'yesnona',
                uuid: 'ascibo',
              },
              {
                text: "If 'Yes', please provide a breakdown by appendix to this application. Please note that revenues in Canada and Australia should be further broken down by province and state for tax purposes.",
              },
              {
                question:
                  'Do you generate revenues and have a presence, i.e., "an establishment", in territories Inside the EEA (excluding U.K.)?',
                type: 'yesnona',
                uuid: '5tkvlh',
              },
              {
                question: "If 'Yes', please list the territories",
                type: 'string',
                uuid: 'rttsmj',
              },
            ],
            Muuid: 'm-38b1sc',
          },
          {
            groupTitle: 'Approximate share of revenue attributable to: ',
            questions: [
              {
                text: 'Last complete financial year',
              },
              {
                question: 'online trading',
                type: 'percent',
                uuid: '1oceoi',
              },
              {
                question: 'business to business',
                type: 'percent',
                uuid: 's25dsd',
              },
              {
                question: 'business to consumer',
                type: 'percent',
                uuid: 'lmiu11',
              },
            ],
            Muuid: 'm-ul2542',
          },
          {
            groupTitle: 'Changes to the business:',
            questions: [
              {
                question:
                  "Does the Applicant anticipate any changes in business activities, mergers, acquisitions, or operations during the next 12 months? If 'Yes', please describe in an appendix to this application.",
                type: 'yesnona',
                uuid: 'akabsr',
              },
              {
                question:
                  'Please describe any acquisitions, divestitures, and changes to business operations over the past 12 months.',
                type: 'string',
                uuid: 'i6e505',
              },
              {
                question:
                  'Are newly acquired companies required to meet certain cybersecurity standards before they are connected to the network?',
                type: 'yesnona',
                uuid: 'mgu8po',
              },
              {
                question: 'Is a cybersecurity audit part of the formal acquisition process?',
                type: 'yesnona',
                uuid: 'o43i3i',
              },
            ],
            Muuid: 'm-ps4lu1',
          },
        ],
      },
    ],
  },
  {
    title: 'Risk Assessment',
    sections: [
      {
        sectionHeader: 'CYBERSECURITY GENERAL INFORMATION',
        text: "Throughout this application, there are several important terms. For clarity, please use the following definitions to guide your answers. <ul><li><b>Vital Assets:</b> Assets which are key to the organization's success and operation. <b>Vital assets</b> include, but are not limited to, applications which support business production, applications which store business critical and/or sensitive data, and core technology services such as directory services, document repositories, and email. <li><b>Domain Administrator:</b> User accounts, excluding <b>Service Accounts</b>, which are <b>privileged</b> (see below). In an Active Directory environment, this would include Enterprise Admins, Domain Admins, and the (built-in domain) Administrators groups, including nested groups/accounts. In Azure, this would include Global Administrators, Hybrid Identity Administrators, and <b>Privileged</b> Role Administrators.<li><b>Service Accounts:</b> Accounts used for running applications and other processes. They are not typically used by humans.<li><b>Privileged:</b> Any account having administrative rights in whatever solution is in use for directory services, identity provider (IdP), rights management, etc. In an Active Directory environment, this would include Enterprise Admins, Domain Admins, and the (built-in domain) Administrators groups, including nested groups/accounts. In Azure, this would include Global Administrators, Hybrid Identity Administrators, and <b>Privileged</b> Role Administrators.</ul>",
        questions: [
          {
            question: 'Annual IT budget',
            type: 'money',
            uuid: 'g50nj1',
          },
          {
            question: 'Percentage of IT budget spent on cyber security',
            type: 'percent',
            uuid: 'jq812e',
          },
          {
            question: 'Full-time IT employees',
            type: 'number',
            uuid: 'rauej2',
          },
          {
            question: 'Full-time cybersecurity employees',
            type: 'number',
            uuid: 'mq0fjp',
          },
          {
            question: "How centralized is the Applicant's information security program?",
            type: ['radio', 'blob'],
            options: [
              "a. Information security at the Applicant is centrally managed, and the policies apply to all operations. Where exceptions are made, it's by asset only (as opposed to by operation/legal entity).",
              'b. Information security at the Applicant is centrally managed, but exceptions are made for certain operation/legal entities. The controls as outlined below apply to greater than or equal to 98% of total endpoints.',
              'c. Information security at the Applicant is centrally managed, but exceptions are made for certain operation/legal entities. The controls as outlined below apply to less than 98% of total endpoints.',
              'd. Information security at the Applicant is federated, but the controls outlined below apply to greater than or equal to 98% of total endpoints.',
              'e. Information security at the Applicant is federated, and the controls outlined below apply to greater than 50% of total endpoints, but less than 98% of total endpoints.',
              'f. Information security is managed by individual legal entities or operating units.',
              "g. Don't know/other -- Add addendum if other",
            ],
            uuid: 'jg007o',
          },
          {
            text: 'Does the Applicant:',
            questions: [
              {
                question: 'Have a Data Protection Officer or someone in charge of data security?',
                type: 'yesnona',
                uuid: '3c5vk6',
              },
              {
                question:
                  'Administer a corporate-wide policy governing security, privacy, and acceptable use of company property for all employees and independent contractors?',
                type: 'yesnona',
                questions: [
                  {
                    question:
                      "If 'Yes', does acceptable use policy include consequences for policy violations?",
                    type: 'yesnona',
                    uuid: '79uibp',
                  },
                  {
                    question:
                      'Are users disallowed from accessing social media platforms from organizational assets except where there is a defined business need?',
                    type: 'yesnona',
                    uuid: 'ih1386',
                  },
                  {
                    question:
                      'Are users disallowed from accessing personal email from organizational assets?',
                    type: 'yesnona',
                    uuid: 'm5f78f',
                  },
                  {
                    question:
                      'Are administrators explicitly disallowed from internet use and personal email from their <b>privileged</b> accounts?',
                    type: 'yesnona',
                    uuid: 'uihjb8',
                  },
                  {
                    question:
                      'Are users and administrators responsible for keeping their computers and accounts safe from common risks or issues?',
                    type: 'yesnona',
                    uuid: 'jac0ff',
                  },
                  {
                    question:
                      'Are users and administrators required to report suspected violations?',
                    type: 'yesnona',
                    uuid: 'msmsvc',
                  },
                ],
                uuid: 'dda9jt',
                Muuid: 'm-k84mf9',
              },
              {
                question:
                  'Perform background checks on all employees and independent contractors with access to sensitive data?',
                type: 'yesnona',
                uuid: 't4qvf2',
              },
              {
                question:
                  'Restrict user access to sensitive data/information based upon the job function of the employee or independent contractor?',
                type: 'yesnona',
                questions: [
                  {
                    question: "If 'Yes', is such access reconsidered on at least an annual basis?",
                    type: 'yesnona',
                    uuid: 'p8n4l2',
                  },
                ],
                uuid: 'vpigig',
                Muuid: 'm-e35f9j',
              },
            ],
            Muuid: 'm-h9rb2g',
          },
          {
            question:
              'Does the Applicant use a third party or Managed Service Provider to administer their technology?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', select all that are true: Applicant utilizes an MSP for:",
                type: ['checkbox', 'string'],
                options: [
                  '<b>Vital assets</b>',
                  'Security operations',
                  'Data backup and recovery',
                  'Cloud transformation',
                  'Software development',
                  'Other (please describe)',
                ],
                uuid: 'oggakg',
              },
              {
                question:
                  "If 'Yes', is the third party or Managed Service Provider given persistent access to the Applicant's resources, not needing authorization to connect?",
                type: 'yesnona',
                uuid: '7k49at',
              },
            ],
            uuid: 'kqlpke',
            Muuid: 'm-8d2ukn',
          },
          {
            question:
              'Does the Applicant have an inventory of all data stores, which includes the data owners, the asset it is stored on, sensitivity, retention limits and disposal requirements for at least all sensitive data?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', is it updated at least annually?",
                type: 'yesnona',
                uuid: 'kk7ng4',
              },
            ],
            uuid: 't34c88',
            Muuid: 'm-8m4t28',
          },
          {
            question: 'Has the Applicant defined and documented all vital assets?',
            type: 'yesnona',
            questions: [
              {
                question:
                  "If 'Yes', is the <b>vital asset</b> inventory updated at least quarterly?",
                type: 'yesnona',
                uuid: 'mlcqi7',
              },
            ],
            uuid: '1t8f3n',
            Muuid: 'm-6imqif',
          },
          {
            question: 'Does the Applicant have a process to actively identify <b>vital assets</b>?',
            type: 'yesnona',
            uuid: 'c6hljk',
          },
          {
            question:
              'Does the Applicant prioritize <b>vital assets</b> by importance to business operations?',
            type: 'yesnona',
            uuid: '2vrc1f',
          },
          {
            question:
              'Does the Applicant have an inventory of all hardware assets, including end user devices, network devices, appliances, IoT devices, and servers?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', does it contain:",
                type: 'checkbox',
                options: ['Static IP address', 'Hardware address', 'Machine name', 'Asset owner'],
                uuid: 'j9um5v',
              },
              {
                question: 'What frequency is the inventory updated?',
                type: 'select',
                options: ['Annually', 'Semi-annually', 'Quarterly', 'Other'],
                uuid: 'rulsec',
              },
            ],
            uuid: '761bp7',
            Muuid: 'm-rjgj3p',
          },
          {
            question:
              'Does the Applicant have a process to discover hardware assets on its network?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', how frequently is process run?",
                type: 'select',
                options: ['Continuously', 'Daily', 'Weekly', 'Monthly', 'Other'],
                uuid: 'vc685s',
              },
            ],
            uuid: 'g0s932',
            Muuid: 'm-09ltte',
          },
          {
            question: 'Does the Applicant have an inventory of all licensed software?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', What frequency is the inventory updated?",
                type: 'select',
                options: ['Annually', 'Semi-annually', 'Quarterly', 'Other'],
                uuid: 'q824ir',
              },
            ],
            uuid: 'mvfml7',
            Muuid: 'm-q9p2uf',
          },
          {
            question: 'Does the Applicant have a process to decommission unused systems?',
            type: 'yesnona',
            uuid: 'i77qe8',
          },
          {
            question:
              'Does the Applicant use on-premises Microsoft Active Directory, regardless of whether it is authoritative?',
            type: 'yesnona',
            uuid: 't1biel',
          },
          {
            question:
              'Please state the number of servers operated by or on behalf of the Applicant:',
            type: 'number',
            uuid: 'rvv92j',
          },
          {
            question:
              'Please state the number of endpoints operated by or on behalf of the Applicant:',
            type: 'number',
            questions: [
              {
                question: 'Desktops',
                type: 'number',
                uuid: 'ium2qv',
              },
              {
                question: 'Laptops',
                type: 'number',
                uuid: 'v8d9g5',
              },
              {
                question: 'Other (please specify)',
                type: 'string',
                uuid: 'ie687v',
              },
            ],
            uuid: '9qoo9s',
            Muuid: 'm-crf2nr',
          },
          {
            text: 'Please state the percent of critical systems hosted:',
            questions: [
              {
                question: 'On premises',
                type: 'percent',
                uuid: 'slbjsu',
              },
              {
                question: 'In a cloud environment',
                type: 'percent',
                uuid: 'ao8frs',
              },
            ],
            Muuid: 'm-9frdgh',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'f5hcv5',
          },
        ],
        Muuid: 'm-gds7rr',
      },
      {
        sectionHeader: 'DATA ASSESSMENT',
        questions: [
          {
            question: 'Please identify nature of sensitive information stored by the Applicant:',
            headers: ['Sensitive information', null, 'Records held (estimate)'],
            labels: [
              'Personally identifiable information',
              'Medical records',
              'Financial information',
              'Driver license numbers',
              'Social Security/National Insurance numbers',
              'Other (please specify below)',
            ],
            type: ['yesnona', 'number'],
            uuid: '7ht4qs',
          },
          {
            question:
              'Please estimate the total number of unique individuals for whom records are currently stored by the Applicant.',
            type: 'number',
            uuid: 'lft31l',
          },
          {
            question:
              'In respect to the previous question, please estimate the maximum number of records held within a single database:',
            type: 'number',
            uuid: 'n3r3sn',
          },
          {
            question: 'Does the Applicant process data for third-party companies?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', please estimate the total number of records processed:",
                type: 'number',
                uuid: 'hvh03e',
              },
            ],
            uuid: '9gvohf',
            Muuid: 'm-3tg9vl',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: '0ovnib',
          },
        ],
        Muuid: 'm-vjm1b9',
      },
      {
        sectionHeader: 'EMPLOYEES',
        text: 'Does the Applicant:',
        questions: [
          {
            question: 'Require users to change passwords on at least a quarterly basis?',
            type: 'yesnona',
            uuid: 'h69j7j',
          },
          {
            question:
              'Require strong passwords for administrator rights, e.g., 10 characters using a mix of alphabetic, numeric, and other characters?',
            type: 'yesnona',
            uuid: 'd6dku4',
          },
          {
            question:
              'Have a solution to prevent users from setting common and known-compromised passwords, even if they meet complexity requirements? (e.g. "1g2w3e4r5t" and "Passw0rd!")',
            type: 'yesnona',
            uuid: 'nlmm9e',
          },
          {
            question:
              'Enforce rotation of administrator access credentials at least every 30 days?',
            type: 'yesnona',
            uuid: 'e96imj',
          },
          {
            question:
              'Require all employees and independent contractors to undergo annual cybersecurity training including phishing?',
            type: 'yesnona',
            uuid: '8lgd25',
          },
          {
            question:
              'Terminate user access rights as part of its employee and independent contractor exit processes?',
            type: 'yesnona',
            uuid: 'tjutvd',
          },
          {
            question: 'Please confirm the total number of employees',
            type: 'number',
            uuid: '5jj762',
          },
          {
            question:
              'Please confirm the total number of computer users, if different than employee count.',
            type: 'number',
            uuid: '8q8bm3',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'jobnvq',
          },
        ],
        Muuid: 'm-d1vdrg',
      },
      {
        sectionHeader: 'MULTIFACTOR AUTHENTICATION',
        text: 'Does the Applicant:',
        questions: [
          {
            question: 'Require multifactor authentication for the following access?',
            type: 'yesnona',
            questions: [
              {
                question: 'Critical information inside the network',
                type: 'yesnona',
                uuid: '94vuns',
              },
              {
                question: 'Remote network access',
                type: 'yesnona',
                questions: [
                  {
                    question: 'VPN',
                    type: 'yesnona',
                    uuid: 'clqshl',
                  },
                  {
                    question: 'VDI',
                    type: 'yesnona',
                    uuid: 'k966qv',
                  },
                  {
                    question: 'Sensitive cloud applications',
                    type: 'yesnona',
                    uuid: '0o7ln0',
                  },
                  {
                    question: 'Sensitive web applications',
                    type: 'yesnona',
                    uuid: 'v9t2pf',
                  },
                ],
                uuid: 'eoeb7i',
                Muuid: 'm-f6nm53',
              },
              {
                question: 'Administrator and privileged accounts',
                type: 'yesnona',
                uuid: '2jcdfk',
              },
              {
                question: 'Personal devices when connecting with the network',
                type: 'yesnona',
                uuid: 's0ass7',
              },
              {
                question: 'Independent contractors and vendors accessing the network',
                type: 'yesnona',
                uuid: 'tffu4f',
              },
              {
                question:
                  'Independent contractors and vendors accessing sensitive cloud or web applications',
                type: 'yesnona',
                uuid: 'gsiqi6',
              },
            ],
            uuid: 'd81rod',
            Muuid: 'm-rb4udf',
          },
          {
            question:
              "Allow External Remote Desktop (RDP)? If 'Yes', are the following implemented:",
            type: 'yesnona',
            questions: [
              {
                question: 'VPN access only',
                type: 'yesnona',
                uuid: 'dv3i5c',
              },
              {
                question: 'Multifactor authentication for access',
                type: 'yesnona',
                uuid: 'mgl11k',
              },
              {
                question: 'Network level authentication enabled',
                type: 'yesnona',
                uuid: '3r3o32',
              },
              {
                question: 'RDP honeypot(s)',
                type: 'yesnona',
                uuid: 'b7u8np',
              },
              {
                question: 'Other (Please identify)',
                type: 'string',
                uuid: '0uop10',
              },
            ],
            uuid: 'gmp5fk',
            Muuid: 'm-majveo',
          },
          {
            question: 'Confirm the type(s) of MFA in place:',
            type: ['checkbox', 'string'],
            options: [
              'Push notification',
              'SMS/test message',
              'Biometric',
              'Authenticator app',
              'Secondary email',
              'Certificate based',
              'Token/physical security key',
              'Other',
            ],
            uuid: '5baq1q',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'tk9e7d',
          },
        ],
        Muuid: 'm-tvq14r',
      },
      {
        sectionHeader: 'PRIVILEGED ACCESS MANAGEMENT',
        text: 'Does the Applicant:',
        questions: [
          {
            question: 'Manage privileged accounts using tooling (e.g., CyberArk, PAM)?',
            type: 'yesnona',
            uuid: 'd77j2k',
          },
          {
            question: 'Enroll any of the following accounts into a PAM tool?',
            type: ['yesnona', 'checkbox', 'string'],
            options: [
              '<b>Privileged</b> user accounts',
              '<b>Service accounts</b>',
              'Domain administrative accounts',
              'Local administrative accounts',
              'Domain <b>service accounts</b>',
              'Application accounts',
              'Backup accounts (used to manage or access backups)',
              'Linux accounts',
              'Other',
            ],
            uuid: 'bsnrkd',
          },
          {
            text: "If 'No', please provide additional information for any local administrative accounts that are not enrolled into the PAM tool:",
            questions: [
              {
                question:
                  'Please confirm that identical local admin credentials are not used (i.e., there is not a common username and password used for each local admin accounts).',
                type: 'yesnona',
                uuid: 'teq4ug',
              },
              {
                question:
                  'Please provide details below on how unauthorized local admin privilege escalation on workstation is detected:',
                type: 'string',
                uuid: 'o7nssv',
              },
              {
                question:
                  "Have you implemented Microsoft's Local Administrator Password Solution (LAPS)?",
                type: 'yesnona',
                uuid: 'oqacnm',
              },
            ],
            Muuid: 'm-2maboh',
          },
          {
            text: 'Enabled the following features on the PAM tool:',
            questions: [
              {
                question:
                  'Please confirm that identical local admin credentials are not used (i.e., there is not a common username and password used for each local admin accounts).',
                type: 'yesnona',
                uuid: 'oednot',
              },
              {
                question: 'Credential time-out (please state time after which account locks):',
                type: ['string', 'yesnona'],
                uuid: 'qd6bcn',
              },
              {
                question: 'One-time passwords',
                type: 'yesnona',
                uuid: '819vd8',
              },
              {
                question: 'Credential rotation',
                type: 'yesnona',
                uuid: '2qk6e2',
              },
              {
                question: 'MFA',
                type: 'yesnona',
                uuid: 'aa8dg2',
              },
              {
                question:
                  'Real-time monitoring of account activity/detection of suspicious activity',
                type: 'yesnona',
                uuid: 'ec1cgr',
              },
            ],
            Muuid: 'm-7s24gs',
          },
          {
            question:
              'How often are all <b>privileged</b> accounts (such as those used in Active Directory and SaaS solutions as well as Service and Local accounts) inventoried and reviewed? (If less than annually or not inventoried and refreshed, please provide details below):',
            type: 'string',
            uuid: '9li05m',
          },
          {
            question:
              'Is logging and alerting configured for <b>privileged</b> account usage/changes?',
            type: 'yesnona',
            uuid: 'laamea',
          },
          {
            question:
              'Are <b>domain administrator</b> accounts unique, separate accounts from other accounts used for everyday activities?',
            type: 'yesnona',
            uuid: 'laso56',
          },
          {
            question:
              'Can <b>Domain Administrator</b> accounts can only be used from <b>Privileged</b> Access Workstations (which do not have access to internet or email)?',
            type: 'yesnona',
            uuid: '31ot0c',
          },
          {
            question:
              'Is there a log of all actions by <b>Domain Administrator</b> accounts for at least the past thirty days?',
            type: 'yesnona',
            uuid: 'q19e5h',
          },
          {
            question: 'Please provide a count of the <b>Domain Administrator</b> accounts.',
            type: 'number',
            uuid: 'qdne4d',
          },
        ],
        Muuid: 'm-5kcr9i',
      },
      {
        sectionHeader: 'LOCAL ADMINISTRATIVE & SERVICE ACCOUNTS',
        text: 'Does the Applicant:',
        questions: [
          {
            text: 'Prohibit workstations from local admin rights:',
            questions: [
              {
                question: 'All of the time?',
                type: 'yesnona',
                uuid: '0m63gl',
              },
              {
                question: 'Case by case?',
                type: 'yesnona',
                uuid: 'cmu30c',
              },
            ],
            Muuid: 'm-f3kjju',
          },
          {
            question: 'Have an inventory of all <b>privileged service accounts</b>?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', how frequently is it reviewed and updated?",
                type: ['checkbox', 'string'],
                options: ['Annually', 'Semi-annually', 'Quarterly', 'Other'],
                uuid: 'j78fnr',
              },
            ],
            uuid: '601eh8',
            Muuid: 'm-bpai05',
          },
          {
            question: 'Please provide number of <b>privileged service accounts</b>:',
            type: 'number',
            questions: [
              {
                text: 'For each <b>privileged service account</b> included above, please use the table provided in Supplement C of application.',
              },
            ],
            uuid: 's6krcj',
            Muuid: 'm-4ma69e',
          },
          {
            question: 'Configure service accounts using the principle of least privilege?',
            type: 'yesnona',
            questions: [
              {
                question:
                  'Are service accounts tiered such that different accounts are used to interact with workstations, servers, and authentication servers, even for the same service?',
                type: 'yesnona',
                uuid: 'dnqnh4',
              },
            ],
            uuid: 'bp7tud',
            Muuid: 'm-fejlk0',
          },
          {
            question: 'Configure service accounts to deny any interactive logon?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', please confirm the percentage:",
                type: 'percent',
                uuid: 'b9mn97',
              },
            ],
            uuid: 'grodq8',
            Muuid: 'm-ifod9s',
          },
          {
            question:
              'Have specific monitoring rules in place for <b>service accounts</b> to alert for any abnormal behavior?',
            type: 'yesnona',
            uuid: 'mp6f9v',
          },
          {
            question: 'Require <b>service account</b> passwords to be ≥ 25 characters?',
            type: 'yesnona',
            uuid: 'rrorgp',
          },
          {
            question: 'Require <b>service account</b> passwords to be rotated on a regular basis?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', how frequently?",
                type: ['checkbox', 'string'],
                options: ['Annually', 'Semi-annually', 'Quarterly', 'Other'],
                uuid: 'dk0ug0',
              },
            ],
            uuid: 'pub8qj',
            Muuid: 'm-kerfqp',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'q612gf',
          },
        ],
        Muuid: 'm-au69da',
      },
      {
        sectionHeader: 'NETWORK OVERVIEW',
        text: 'Does the Applicant:',
        questions: [
          {
            question: 'Intrusion Prevention Solution (IPS)? Product name:',
            type: ['string', 'yesnona'],
            uuid: 'erkjq4',
          },
          {
            question: 'Intrusion Detection Solution (IDS)? Product name:',
            type: ['string', 'yesnona'],
            uuid: 'ir3kb7',
          },
          {
            question: 'Endpoint Protection Platform (EPP)? Product name:',
            type: ['string', 'yesnona'],
            questions: [
              {
                question: 'Does this include:',
                type: 'checkbox',
                options: ['Endpoints/workstations', 'Servers'],
                uuid: 'tr2u4u',
              },
              {
                question: 'Do capabilities include isolation and containment?',
                type: 'yesnona',
                uuid: 'vntm2g',
              },
              {
                question: 'Do capabilities include behavioral detection and exploit mitigation?',
                type: 'yesnona',
                uuid: 'l0jtet',
              },
            ],
            uuid: 'c6r720',
            Muuid: 'm-ma11t2',
          },
          {
            question: 'Endpoint Detection and Response (EDR)? Product name:',
            type: ['string', 'yesnona'],
            questions: [
              {
                question: 'What % of Endpoints are protected by above?',
                type: 'percent',
                uuid: 'dfl74p',
              },
              {
                question: 'What % of Servers are protected by above?',
                type: 'percent',
                uuid: 'hfn9rg',
              },
            ],
            uuid: 'b5k786',
            Muuid: 'm-053hfo',
          },
          {
            question: 'Managed Detection and Response (MDR)? Product name:',
            type: ['string', 'yesnona'],
            uuid: '17itrk',
          },
          {
            question: 'Network Detection and Response (NDR)? Product name:',
            type: ['string', 'yesnona'],
            uuid: 'lhnv0n',
          },
          {
            question: 'Security Information and Event Management (SIEM)? Product name:',
            type: ['string', 'yesnona'],
            questions: [
              {
                question:
                  'If using Active Directory, are domain controller logs ingested by the SIEM?',
                type: 'yesnona',
                uuid: '2nnsb1',
              },
              {
                question: 'What information does the SIEM ingest?',
                type: 'string',
                uuid: 'rasg6h',
              },
              {
                question:
                  'What percentage of Applicant\'s "<b>Vital Assets</b>" are ingested by SIEM',
                type: 'percent',
                uuid: 'hg4ih1',
              },
              {
                question: 'How long does SIEM retain logs?',
                type: 'string',
                uuid: 'drp10s',
              },
            ],
            uuid: 'ncpikf',
            Muuid: 'm-djv6ht',
          },
          {
            question: 'Data Loss Prevention solution (DLP) in place? Product name:',
            type: ['string', 'yesnona'],
            questions: [
              {
                question: 'Do alerts from the DLP feed into the SIEM?',
                type: 'yesnona',
                uuid: 'c1e203',
              },
              {
                question: 'Is your DLP solution email or network based?',
                type: 'yesnona',
                uuid: 'fa3fk1',
              },
              {
                question: 'Is your DLP solution in blocking mode?',
                type: 'yesnona',
                uuid: 'uc1vrk',
              },
            ],
            uuid: 'k29vd1',
            Muuid: 'm-549qnj',
          },
          {
            question: "Security Operations Center (SOC)? If 'Yes':",
            type: 'yesnona',
            questions: [
              {
                question: '24x7 live coverage with eyes on glass?',
                type: 'yesnona',
                uuid: 'cfd5tj',
              },
              {
                question: 'Internally staffed?',
                type: 'yesnona',
                uuid: '8pr0jo',
              },
              {
                question: 'Managed by a third party?',
                type: 'yesnona',
                uuid: 'dhp0h4',
              },
              {
                question: 'Does the SOC have authority and ability to remediate security events?',
                type: 'yesnona',
                uuid: 'hti82i',
              },
              {
                question: 'Is the SOC provided an updated list of vital assets at least quarterly?',
                type: 'yesnona',
                uuid: 'r3d6ot',
              },
              {
                question:
                  'Of the products referenced above in this section, which are monitored by the SOC?',
                type: ['yesnona', 'checkbox'],
                options: ['IDS', 'IPS', 'EPP', 'EDR', 'MDR', 'NDR', 'SIEM', 'DLP'],
                uuid: 't6mruv',
              },
            ],
            uuid: 'q4eedc',
            Muuid: 'm-qhlgvr',
          },
          {
            question:
              'Regarding the products referenced above in this section, are all that require updated definitions updated at least daily?',
            type: 'yesnona',
            uuid: 'iar76h',
          },
          {
            question:
              'Regarding the products referenced above in this section, are all available anti-tamper features enabled?',
            type: 'yesnona',
            uuid: 'db6tk8',
          },
          {
            question:
              'Regarding the products referenced above in this section, are all tools set to block suspected malicious activity vs. just notify?',
            type: 'yesnona',
            uuid: '5d9ir9',
          },
          {
            question:
              'If the Applicant is using Active Directory, which of the following Audit Policies are enabled on Domain Controllers?',
            type: 'yesnona',
            questions: [
              {
                question: 'Audit Credential Validation (Failure)',
                type: 'yesnona',
                uuid: 'g9f4r6',
              },
              {
                question: 'Audit Process Creation (Success)',
                type: 'yesnona',
                uuid: 'o9doab',
              },
              {
                question: 'Audit Security Group Management (Success and Failure)',
                type: 'yesnona',
                uuid: 'b0k40c',
              },
              {
                question: 'Audit User Account Management (Success and Failure)',
                type: 'yesnona',
                uuid: 'i54p45',
              },
              {
                question: 'Audit Other Account Management (Success and Failure)',
                type: 'yesnona',
                uuid: 'lghlli',
              },
              {
                question: 'Audit Sensitive Privilege Use (Success and Failure)',
                type: 'yesnona',
                uuid: 'pmehno',
              },
              {
                question: 'Audit Logon (Success and Failure)',
                type: 'yesnona',
                uuid: '6sko5b',
              },
              {
                question: 'Audit Special Logon (Success)',
                type: 'yesnona',
                uuid: 'qpluom',
              },
            ],
            uuid: 'j6vf3c',
            Muuid: 'm-quol9i',
          },
          {
            question:
              'Implement a hardened baseline configuration materially rolled out across severs, laptops, desktops, and managed mobile device?',
            type: 'yesnona',
            uuid: 'g0p41g',
          },
          {
            question: 'Employ vulnerability scanning across your enterprise?',
            type: 'yesnona',
            questions: [
              {
                question: 'What % of the enterprise is covered?',
                type: 'percent',
                uuid: '18urn7',
              },
              {
                question: 'What is the frequency of scanning?',
                type: 'select',
                options: ['Constant', 'Daily', 'Weekly', 'Monthly', '> Monthly'],
                uuid: '8r2uid',
              },
            ],
            uuid: '2e8fp2',
            Muuid: 'm-qu4ih2',
          },
          {
            question:
              'Route all outbound web requests through a web proxy which monitors for and blocks potentially malicious content?',
            type: 'yesnona',
            uuid: 'upvq2t',
          },
          {
            question:
              'Implement PowerShell best practices as outlined in the Environment Recommendations by Microsoft (https://docs.microsoft.com/en-us/mem/configmgr/apps/deploy-use/learn-script-security)',
            type: 'yesnona',
            uuid: 'fk4ur6',
          },
          {
            question: 'Segment your network based on certain criteria?',
            type: ['yesnona', 'checkbox', 'string'],
            options: [
              'The classification or level of information stored on your systems',
              'By geography',
              'System criticality',
              'Business function',
              'Subsidaries',
              'Brick and mortar locations',
              'Other',
            ],
            uuid: 'msfksu',
          },
          {
            question:
              'Segregate critical networks from internet facing or other less critical networks?',
            type: 'yesnona',
            uuid: 'l1dm9h',
          },
          {
            question:
              'Do you segregate operational technology from information technology networks?',
            type: 'yesnona',
            uuid: 'r4gi33',
          },
          {
            question:
              'Configured host-based and network firewalls to disallow inbound connections by default?',
            type: 'yesnona',
            uuid: 'm1fgv0',
          },
          {
            question: 'An inventory of externally exposed assets?',
            type: 'yesnona',
            uuid: '20nels',
          },
          {
            question: 'Vulnerability scans of externally exposed assets?',
            type: 'yesnona',
            questions: [
              {
                question: 'What is the frequency?',
                type: 'select',
                options: ['Constant', 'Daily', 'Weekly', 'Monthly', '> Monthly'],
                uuid: 'u0t4cb',
              },
            ],
            uuid: '74nfic',
            Muuid: 'm-rspvfr',
          },
          {
            question:
              'Are Web Application Firewalls (WAF) in place for everything that is externally facing?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', is the WAF in blocking mode?",
                type: 'yesnona',
                uuid: 'glcui7',
              },
            ],
            uuid: 'rfdfnq',
            Muuid: 'm-q3553t',
          },
          {
            question: 'Protective DNS service (e,g., Quad9, OpenDNS or the public sector PDNS)?',
            type: 'yesnona',
            uuid: '5dtp1v',
          },
          {
            question:
              'On externally exposed systems, disable or block those ports, services, and protocols known to allow the spread of ransomware? These include, but are not limited to RDP, SMBv1, SMBv2',
            type: 'yesnona',
            uuid: 'lmfec1',
          },
          {
            question: 'Penetration testing done by a third party?',
            type: 'yesnona',
            questions: [
              {
                question:
                  "If 'Yes', does the testing simulate known threat actor tactics, techniques, and procedures?",
                type: 'yesnona',
                uuid: 'q5ksfu',
              },
              {
                question: "If 'Yes', what is the frequency?",
                type: ['select', 'string'],
                options: ['Annually', 'Semi-annually', 'Quarterly', 'Other'],
                uuid: 'gd3jgh',
              },
            ],
            uuid: 'bid0nd',
            Muuid: 'm-e5mim0',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: '0ea2d8',
          },
        ],
        Muuid: 'm-5tlrq9',
      },
      {
        sectionHeader: 'EMAIL',
        questions: [
          {
            question: 'What email platform is in use?',
            type: ['select', 'string'],
            options: [
              'Microsoft Office 365',
              'Internal Microsoft Exchange',
              'Google Workspace',
              'Other (please identify)',
            ],
            uuid: '33j91o',
          },
          {
            question: 'Multifactor Authentication (MFA) enabled on all user accounts?',
            type: 'yesnona',
            uuid: '3o6qtm',
          },
          {
            question:
              'Utilize an email monitoring/filtering solution (i.e. Microsoft ATP, Proofpoint, Mimecast)?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', enter solution.",
                type: 'string',
                uuid: 'tn8p37',
              },
            ],
            uuid: 'gktdu1',
            Muuid: 'm-ks69cu',
          },
          {
            question:
              "If 'Yes', does email monitoring/filtering solution perform any of the following?",
            type: 'yesnona',
            questions: [
              {
                question:
                  'a. Blocks known malicious links, attachments, and suspicious file types, including executables',
                type: 'yesnona',
                uuid: 'pbk9ue',
              },
              {
                question:
                  'b. Blocks suspicious messages based on their content or attributes of the sender',
                type: 'yesnona',
                uuid: 'p7i7vp',
              },
              {
                question: 'c. Has the capability to run suspicious attachments in a sandbox',
                type: 'yesnona',
                uuid: '2d3u48',
              },
            ],
            uuid: 'ko1tvm',
            Muuid: 'm-u55oat',
          },
          {
            question: 'Implemented the following to protect against phishing messages:',
            type: ['yesnona', 'select'],
            options: ['SPF', 'DKIM', 'DMARC'],
            uuid: '2t8176',
          },
          {
            question: 'Conduct regular phishing simulations of staff? If so, how often:',
            type: ['yesnona', 'select'],
            options: ['Monthly', 'Quarterly', 'Annually'],
            uuid: 'dh3npk',
          },
          {
            question: 'Measure-click through/fail rate? If Yes, please confirm:',
            type: ['yesnona', 'select'],
            options: ['0-5%', '6-10%', '11-16%', 'Higher fail rate'],
            uuid: 'ietefk',
          },
          {
            question:
              'Is immediate additional training assigned for staff that fail phishing simulations?',
            type: 'yesnona',
            uuid: 'khhj9d',
          },
          {
            question: 'Is access to web-based email such as Outlook Web Access permitted?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', is MFA enforced",
                type: 'yesnona',
                uuid: 'll0qvl',
              },
            ],
            uuid: '5oic6o',
            Muuid: 'm-d3ie16',
          },
          {
            question:
              'Tag external emails to alert employees that the message originated from outside the organization?',
            type: 'yesnona',
            uuid: 'fc822v',
          },
          {
            question: 'Filter/scan incoming emails for malicious attachments and/or links?',
            type: 'yesnona',
            questions: [
              {
                question:
                  "If 'Yes', do you have the ability to automatically quarantine, detonate, and evaluate attachments?",
                type: 'yesnona',
                uuid: '46dbk9',
              },
            ],
            uuid: '9d52ae',
            Muuid: 'm-f3t0l4',
          },
          {
            question:
              'Disable macros in office productivity software by default? (e.g., Microsoft Office, Google Workspace)',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', are users allowed to enable macros?",
                type: 'yesnona',
                uuid: 'h61153',
              },
            ],
            uuid: '19lp59',
            Muuid: 'm-oh717n',
          },
          {
            question: 'Which legacy email protocols have been disabled?',
            type: 'checkbox',
            options: ['Basic Authentication', 'IMAP', 'POP3', 'SMTP'],
            uuid: '3ostl9',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'dbq4ru',
          },
        ],
        Muuid: 'm-dag8rl',
      },
      {
        sectionHeader: 'PATCHING & SOFTWARE',
        questions: [
          {
            question:
              'Have a patching policy in place to install critical and high severity patches across the enterprise? If so, please confirm the time frame:',
            type: ['yesnona', 'select'],
            options: ['<24 hours', '24-72 hours', '2-7 days', '7-30 days', '>30 days'],
            questions: [
              {
                question: 'Which systems are patched?',
                type: 'checkbox',
                options: ['Internal servers', 'Workstations', 'Perimeter systems'],
                uuid: '9nro91',
              },
              {
                question: 'Is compliance with the policy tracked?',
                type: 'yesnona',
                questions: [
                  {
                    question: "If 'Yes', what is the compliance rate?",
                    type: 'select',
                    options: ['>95%', '90%-95%', '80%-89%', '<80%'],
                    uuid: 'c5poeq',
                  },
                ],
                uuid: '2s1nga',
                Muuid: 'm-oaof2c',
              },
            ],
            uuid: '81nkan',
            Muuid: 'm-9uppm5',
          },
          {
            question:
              'Have a patching policy in place to install normal severity patches across the enterprise? If so, please confirm the time frame',
            type: ['yesnona', 'select'],
            options: ['24-72 hours', '2-7 days', '7-30 days', '>30 days'],
            questions: [
              {
                question: 'Which systems are patched?',
                type: 'checkbox',
                options: [
                  'Internal servers',
                  'Workstations',
                  'Perimeter systems',
                  'Third Party Apps',
                  'Web browsers',
                ],
                uuid: 'ntsv02',
              },
            ],
            uuid: '41f3m1',
            Muuid: 'm-jee5vd',
          },
          {
            question: 'Operate any end of life or end of support software or platforms?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', is it segregated from the rest of the network?",
                type: 'yesnona',
                uuid: 's2ir01',
              },
              {
                question: "If 'Yes', is sensitive PII data stored or processed on these assets?",
                type: 'yesnona',
                uuid: 'd5c4q0',
              },
              {
                question:
                  "If 'Yes', do you purchase additional support for the software, where available?",
                type: 'yesnona',
                uuid: '2icb2e',
              },
            ],
            uuid: 'ta0j37',
            Muuid: 'm-11k1pe',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: '14h7tq',
          },
        ],
        Muuid: 'm-gnspvo',
      },
      {
        sectionHeader: 'KNOWN VULNERABILITIES',
        questions: [
          {
            question:
              'Has the Applicant been affected by any known vulnerabilities rated 10 or above in the common vulnerabilities and exposures database (https://nvd.nist.gov/general/nvd-dashboard)? (e.g. Keseya, Log4J, SolarWinds? )',
            type: 'yesnona',
            questions: [
              {
                question:
                  "If 'Yes', please outline any and all patching procedures, mitigating controls, investigations, or evidence of malicious activity below, or provide in an appendix",
                type: 'blob',
                uuid: 'tr26k0',
              },
            ],
            uuid: 'rt0dl8',
            Muuid: 'm-65n49k',
          },
        ],
        Muuid: 'm-gu9rid',
      },
      {
        sectionHeader: 'BACKUPS & RECOVERY TIME',
        text: 'Does the Applicant:',
        questions: [
          {
            question: 'Conduct regular backup of data?',
            type: 'yesnona',
            uuid: 'krggcb',
          },
          {
            question: 'Frequently backup critical information? At least:',
            type: 'select',
            options: [
              'Continuously',
              'Daily',
              'Weekly',
              'Monthly',
              'Quarterly',
              'Semiannually',
              'Annually',
            ],
            uuid: '0jrfnu',
          },
          {
            question: 'Utilize physical backup tapes?',
            type: 'yesnona',
            uuid: '96hj3l',
          },
          {
            question: 'Store backups? Select all that apply:',
            type: 'checkbox',
            options: [
              'Cloud',
              'On-premises',
              'Offline storage',
              'Off-site storage',
              'Secondary data center',
            ],
            uuid: '4conhn',
          },
          {
            text: "If 'Cloud' was selected to store backups:",
            questions: [
              {
                question:
                  "Is your cloud-based backup service a 'syncing service'? (e.g., DropBox, OneDrive, SharePoint, Google Drive)",
                type: 'yesnona',
                uuid: '1no9o3',
              },
              {
                question:
                  'Have you determined how long it would take to restore all data from the cloud?',
                type: 'yesnona',
                uuid: 'cctrt3',
              },
              {
                question:
                  'Is access to cloud backups logged with alerts configured for suspicious activity?',
                type: 'yesnona',
                uuid: '9uqgog',
              },
              {
                question:
                  'Do you utilize versioning, data deletion prevention, and/or copies of the backups in other availability zones?',
                type: 'yesnona',
                uuid: 'fspo59',
              },
            ],
            Muuid: 'm-55a8h1',
          },
          {
            question: "If 'Offline storage' was selected to store backups, is this done at least:",
            type: ['select'],
            options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Other (please identify)'],
            uuid: 'kqe7eb',
          },
          {
            question: "If 'Off-site storage' was selected to store backups, is this done at least:",
            type: ['select'],
            options: ['Daily', 'Weekly', 'Monthly', 'Quarterly'],
            uuid: 'c3hcqs',
          },
          {
            question: 'Subject backups to the following measures? Select all that apply:',
            type: 'checkbox',
            options: [
              'Multifactor authentication',
              'Encryption',
              'Segmentation',
              'Virus/malware scanning',
              'Immutable',
            ],
            questions: [
              {
                question:
                  "If 'Encryption' was selected, is there an offline backup of encryption keys?",
                type: 'yesnona',
                uuid: 'e87sid',
              },
            ],
            uuid: 'be1ime',
            Muuid: 'm-m8ok64',
          },
          {
            question: 'Store unique backup credentials separately from other user credentials?',
            type: 'yesnona',
            uuid: '1rjjf7',
          },
          {
            question:
              'Employ a physical and logical separation of backups from the rest of the network?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'No', please outline the backup storage procedure:",
                type: 'blob',
                uuid: 'fce9ft',
              },
            ],
            uuid: 's69hie',
            Muuid: 'm-c7l7e7',
          },
          {
            question: 'Use unique accounts (not used for other systems) to access backups?',
            type: 'yesnona',
            uuid: 'hi70mb',
          },
          {
            question: 'Use accounts that are domain joined to access backups?',
            type: 'yesnona',
            uuid: 'fe8ja6',
          },
          {
            question:
              'Test a full recovery from a backup? If yes, the frequency of testing is at least:',
            type: ['yesnona', 'select', 'string'],
            options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Other (please identify)'],
            uuid: 'gsqbto',
          },
          {
            question:
              'Test the integrity of backups prior to restoration to be confident it is free from malware?',
            type: 'yesnona',
            uuid: '1kgmjo',
          },
          {
            question:
              'Maintain a warm or hot backup site for the purposes of resiliency, continuity, or redundancy?',
            type: 'yesnona',
            uuid: 'rhu1lb',
          },
          {
            question:
              "What is the Applicant's average time to triage and contain security incidents of workstations year to date?",
            type: ['select', 'string'],
            options: [
              '<30 minutes',
              '30-120 minutes',
              '2-8 hours',
              '>8 hours',
              'Other (please identify)',
            ],
            uuid: '7qevjn',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'l5o895',
          },
        ],
        Muuid: 'm-boakm0',
      },
      {
        sectionHeader: 'NETWORK SECURITY ASSESSMENT',
        text: 'Does the Applicant:',
        questions: [
          {
            question:
              'Conduct security policy and procedure audits and remediate critical deficiencies?',
            type: 'yesnona',
            uuid: 'du3s2b',
          },
          {
            question:
              'Have physical security to control access to its data centers/server rooms? (e.g. 24 hr. guards, access cards, biometric access)',
            type: 'yesnona',
            uuid: 'f47el3',
          },
          {
            question: 'Replace factory default settings when configuring software and systems?',
            type: 'yesnona',
            uuid: '631ssj',
          },
          {
            question: 'Enforce a clear desk policy at all sites?',
            type: 'yesnona',
            uuid: 'fqudsr',
          },
          {
            question: 'Have an enterprise-wide data retention and destruction policy?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', is this policy regularly reviewed and updated?",
                type: 'yesnona',
                uuid: 'd6901r',
              },
            ],
            uuid: '345hpb',
            Muuid: 'm-sk0kra',
          },
          {
            question: 'Have antivirus protection in place and is it updated frequently?',
            type: 'yesnona',
            uuid: '0vdbi5',
          },
          {
            question:
              'Build information security measures into software that is developed or modified by internal resources?',
            type: 'yesnona',
            uuid: 'duqig0',
          },
          {
            question: 'Require all connecting devices to have antivirus and firewall installed?',
            type: 'yesnona',
            uuid: '67btlc',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: '5b01pq',
          },
        ],
        Muuid: 'm-a5bff3',
      },
      {
        sectionHeader:
          'HANDLING & CRITICAL SENSITIVE INFORMATION (SENSITIVE INFORMATION AS DESCRIBED IN SECTION III.1. OF THIS APPLICATION)',
        text: 'Does the Applicant:',
        questions: [
          {
            question: 'Have data classification/categorization measures in place?',
            type: 'yesnona',
            uuid: 'su1obn',
          },
          {
            question: 'Isolate critical/sensitive information in its own segregated environment?',
            type: 'yesnona',
            uuid: 'ctbnuh',
          },
          {
            question: 'Encrypt critical/sensitive information whilst at rest or in transit?',
            type: 'yesnona',
            uuid: 'hdkak5',
          },
          {
            question:
              'Use additional security measures such as tokenization or salting where applicable?',
            type: 'yesnona',
            uuid: 'eq9ead',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: '9v4gmp',
          },
        ],
        Muuid: 'm-4dc00s',
      },
      {
        sectionHeader: 'MOBILE & PORTABLE DEVICES',
        text: 'Does the Applicant:',
        questions: [
          {
            question:
              'Encrypt all sensitive data that is physically removed from your premises by laptop, mobile/portable devices, USB, backup tapes or other means?',
            type: 'yesnona',
            questions: [
              {
                question:
                  "If 'Yes', do you require storage on mobile and portable devices to be encrypted?",
                type: 'yesnona',
                uuid: 'vr9ud8',
              },
              {
                question:
                  "If 'No', please confirm whether the Applicant has a policy that governs the use of mobile and portable devices and controls?",
                type: 'yesnona',
                uuid: '8u3i7g',
              },
            ],
            uuid: 'us78vc',
            Muuid: 'm-b6eqr7',
          },
          {
            question:
              'Allow Bring-Your-Own-Device (BYOD) connections to the business network? (If only allowed to connect to guest Wi-Fi, choose "No")',
            type: 'yesnona',
            questions: [
              {
                question:
                  "If 'Yes', does the Applicant have a policy that governs the use of BYOD and controls?",
                type: 'yesnona',
                uuid: 'ji7b8r',
              },
            ],
            uuid: 'cltq7e',
            Muuid: 'm-ptqu7m',
          },
          {
            question: 'Use a mobile device management (MDM) solution to manage mobile devices?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', is the MDM system applied to:",
                type: 'checkbox',
                options: ['Company-owned devices', '"BYOD" devices'],
                uuid: 'rc7n45',
              },
            ],
            uuid: '9kh20f',
            Muuid: 'm-jn0i56',
          },
          {
            question: 'Encrypt sensitive data when sent outside of its network (in transit)?',
            type: 'yesnona',
            uuid: '4dmqpi',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: '3g5uji',
          },
        ],
        Muuid: 'm-c4dp9c',
      },
      {
        sectionHeader: 'DATA RECOVERY & NETWORK BUSINESS INTERRUPTION ASSESSMENT',
        text: 'Does the Applicant:',
        questions: [
          {
            question:
              'Have any of the following plans in place to address security or data breaches:',
            type: 'checkbox',
            options: [
              'Incident response plan',
              'Business continuity plan',
              'Disaster recovery plan',
            ],
            questions: [
              {
                question:
                  "If 'Yes', do the plan(s) clearly define the responsibilities and the support personnel for each key role?",
                type: 'yesnona',
                uuid: 'o009d9',
              },
              {
                question:
                  "If 'Yes', does the plan(s) include ransomware-specific response and recovery plans?",
                type: 'yesnona',
                uuid: 'c7s0qn',
              },
              {
                question:
                  "If 'Yes', are the plan(s) tested at least annually with any critical deficiencies remediated?",
                type: 'yesnona',
                uuid: '4fliq1',
              },
              {
                question: "If 'Yes', are the plan(s) readily available in hardcopy?",
                type: 'yesnona',
                uuid: 'gbvm30',
              },
            ],
            uuid: 'jk5s69',
            Muuid: 'm-1ojci0',
          },
          {
            question: 'Conduct cybersecurity incident tabletop exercises?',
            type: 'yesnona',
            questions: [
              {
                question: 'Approximate date of last exercise?',
                type: 'date',
                uuid: 'af8r71',
              },
              {
                question: 'Did the exercise include a threat from ransomware?',
                type: 'yesnona',
                uuid: 'e6ksea',
              },
            ],
            uuid: '4o3vq3',
            Muuid: 'm-ms74s9',
          },
          {
            question:
              "Track how long it takes to restore the Applicant's <b>vital assets</b> following a network outage? If so, the length of time is:",
            type: ['yesnona', 'select'],
            options: ['<8 hours', '8-12 hours', '12-24 hours', '24-72 hours', '>72 hours'],
            uuid: '1ignsn',
          },
          {
            question:
              "Track how long it takes to restore the Applicant's non-critical systems following a network outage? If so, the length of time is:",
            type: ['yesnona', 'select'],
            options: ['<8 hours', '8-12 hours', '12-24 hours', '24-72 hours', '>72 hours'],
            uuid: 'urpge5',
          },
          {
            question: "What is the Applicant's Recovery Time Objective (RTO)?",
            type: 'string',
            questions: [
              {
                question: 'Does the Applicant test and meet the RTO?',
                type: 'yesnona',
                uuid: 'bf4gg8',
              },
            ],
            uuid: 's68ugd',
            Muuid: 'm-lck1uu',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'hvqq1v',
          },
        ],
        Muuid: 'm-2ddpsm',
      },
      {
        sectionHeader: 'LEGAL & REGULATORY',
        text: 'Does the Applicant:',
        questions: [
          {
            question:
              "Have policies and procedures in place covering the following individuals' rights under countries' data protection regulations?",
            type: 'yesnona',
            questions: [
              {
                question:
                  'Individuals are informed about the collection and use of their personal data',
                type: 'yesnona',
                uuid: '6fg1cm',
              },
              {
                question:
                  'Individuals have the right to access their personal data and a formal subject access request process is in place',
                type: 'yesnona',
                uuid: 'cmbnec',
              },
              {
                question:
                  'Individuals have the right to have inaccurate personal data rectified, or completed if it is incomplete, and a formal data rectification request process is in place',
                type: 'yesnona',
                uuid: 'e3dpsj',
              },
              {
                question:
                  'Individuals have the right to have personal data erased and a formal data erasure process is in place',
                type: 'yesnona',
                uuid: 'atp8p1',
              },
              {
                question:
                  'Individuals have the right to obtain and reuse their personal data for their own purposes across different services and a formal data portability policy is in place',
                type: 'yesnona',
                uuid: 'oth2jg',
              },
              {
                question:
                  'Individuals have the right to object to the processing of their personal data and a formal objection policy is in place',
                type: 'yesnona',
                uuid: 'vorr1n',
              },
              {
                question:
                  'Have a lawful basis to carry out profiling and/or automated decision-making which is documented in our data protection policy?',
                type: 'yesnona',
                uuid: 'ar869n',
              },
              {
                question: 'Have a privacy policy?',
                type: 'yesnona',
                questions: [
                  {
                    question: "If 'Yes'",
                    type: 'yesnona',
                    questions: [
                      {
                        question: "Is the privacy policy displayed on the Applicant's website?",
                        type: 'yesnona',
                        uuid: 'p6s1a7',
                      },
                      {
                        question:
                          "Is the privacy policy approved by the Applicant's Board or legal department?",
                        type: 'yesnona',
                        uuid: 'bacqok',
                      },
                      {
                        question: 'Is the privacy policy regularly reviewed and updated?',
                        type: 'yesnona',
                        uuid: '1d7tac',
                      },
                    ],
                    uuid: 'vg6p8e',
                    Muuid: 'm-nbdsim',
                  },
                ],
                uuid: '19neih',
                Muuid: 'm-taocer',
              },
              {
                question:
                  'Have a written, Board-approved policy that addresses compliance with applicable privacy and security laws or regulations?',
                type: 'yesnona',
                uuid: 'lcjabt',
              },
            ],
            uuid: 'q6umsp',
            Muuid: 'm-putadp',
          },
          {
            question:
              "If you have answered 'No' to any of the questions above, please provide an explanation and information on your plans for compliance below:",
            type: 'blob',
            uuid: '7h2t6e',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'mm1doh',
          },
        ],
        Muuid: 'm-dkb5ms',
      },
      {
        sectionHeader: 'VENDOR MANAGEMENT',
        questions: [
          {
            question:
              "Please identify all vendors that have access to or help to manage the Applicant's network or security systems:",
            type: ['string', 'yesnona'],
            headers: [
              'Nature of service',
              'Name of vendor',
              'Does the vendor indemnify the Applicant under contract?',
            ],
            labels: [
              'Data center hosting',
              'Cloud services',
              'Web hosting',
              'Critical software',
              'Managed security services',
              'Data processing services',
              'Endpoint detection and response',
              'Antivirus',
              'Firewall',
              'Intrusion detection and prevention systems',
              'Internet service provider',
              'Data loss prevention',
              'Recovery services',
              'Other',
            ],
            dynamicAdd: true,
            dynamicAddLabel: 'Add Other',
            uuid: '1d2okl',
          },
          {
            question: "Are all vendors required to comply with the Applicant's security policy?",
            type: 'yesnona',
            uuid: 'd4lanf',
          },
          {
            question:
              "Are vendors audited to ensure that they meet the Applicant's security and privacy standards as well as those customary in the relevant industry and those mandated by regulators?",
            type: 'yesnona',
            uuid: '2dhki9',
          },
          {
            question: 'Are vendor access rights periodically reviewed and updated?',
            type: 'yesnona',
            uuid: '79h8d0',
          },
          {
            question: "Is vendor access on the Applicant's network monitored?",
            type: 'yesnona',
            uuid: 'ceg0t5',
          },
          {
            question: 'Is vendor access limited to dedicated time windows?',
            type: 'yesnona',
            uuid: '26kd54',
          },
          {
            question:
              'Does the Applicant periodically review all contracts to ensure that they satisfy data security and privacy laws and regulations?',
            type: 'yesnona',
            uuid: 'h70drt',
          },
          {
            question:
              'Does the Applicant have a procedure to manage the termination of vendor contracts?',
            type: 'yesnona',
            uuid: 'j85ok1',
          },
          {
            question: 'Does the Applicant require vendors to have cyber insurance coverage?',
            type: 'yesnona',
            uuid: 'csfp5q',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 't6cgsa',
          },
        ],
        Muuid: 'm-iksmse',
      },
      {
        sectionHeader: 'BIOMETRIC INFORMATION',
        text: 'Does the Applicant:',
        questions: [
          {
            question:
              "Collect, store, process, use or retain any biometric information? If 'Yes', please answer the following section.",
            type: 'yesnona',
            uuid: '5bk641',
          },
          {
            question:
              'Collect, receive, or retain any biometric data on employees or consumers as defined by law including (but not limited to):',
            type: ['checkbox', 'string'],
            options: [
              'Retina scan',
              'Voiceprint',
              'Iris scan',
              'Hand scan',
              'Fingerprint',
              'Face geometry',
              'Other (please identify)',
            ],
            uuid: 'kmeut7',
          },
          {
            question:
              'Clearly define to employees, consumers, and/or individuals how the Applicant will:',
            type: 'checkbox',
            options: [
              'Collect their biometric information',
              'Use their biometric information',
              'Destroy their biometric Information',
            ],
            uuid: '10vva3',
          },
          {
            question:
              'Sell, lease, trade or otherwise profit from the biometric information of employees/consumers/individuals?',
            type: 'yesnona',
            uuid: 'h5nl8i',
          },
          {
            question:
              'Subject biometric information to the following measures? Select all that apply.',
            type: ['checkbox', 'string'],
            options: [
              'Encryption in transit',
              'Restricted access a least <b>privileged</b> basis',
              'Encryption at rest',
              'Segregated in an isolated environment',
              'Other (please identify)',
            ],
            uuid: '03itu0',
          },
          {
            question:
              'Obtain written consent from employees/consumers/individuals prior to collection, receipt, or retention of biometric data?',
            type: 'yesnona',
            uuid: 'l46j0g',
          },
          {
            question:
              'Have a retention schedule outlining how long biometric information is retained?',
            type: 'yesnona',
            uuid: 'dj9fn2',
          },
          {
            question:
              'Have a data destruction policy for biometric information that is no longer required?',
            type: 'yesnona',
            uuid: 'vm4scs',
          },
          {
            question:
              "Has the Applicant received any complaints alleging the unlawful collection, use, dissemination, or sale of biometric data? If 'Yes', please describe:",
            type: ['yesnona', 'string'],
            uuid: 'trfbhv',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'h808ac',
          },
        ],
        Muuid: 'm-o3s317',
      },
    ],
  },
  {
    title: 'Additional Coverage',
    sections: [
      {
        sectionHeader: 'PAYMENT CARD INDUSTRY ASSESSMENT',
        text: 'Does the Applicant:',
        coverage: 'PCI DSS liability coverage',
        coverageKey: 'pci',
        questions: [
          {
            question: 'Accept payment cards for its goods of services?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', is the Applicant compliant with PCI DSS Security Standards?",
                type: 'yesnona',
                uuid: '2eq09p',
              },
              {
                question:
                  "If 'No', please describe the current status of the Applicant's compliance work:",
                type: 'blob',
                uuid: 'k56r2v',
              },
              {
                question: 'What Level of PCI Merchant is the Applicant?',
                type: 'string',
                uuid: 'jjsl8n',
              },
              {
                question:
                  'Approximately how many transactions were processed during the last 12 months?',
                type: 'number',
                uuid: '4nf10c',
              },
              {
                question:
                  'What is the approximate percentage of annual revenue attributable to credit card transactions?',
                type: 'percent',
                uuid: 'n8dr81',
              },
            ],
            uuid: 'dhpb74',
            Muuid: 'm-1m9797',
          },
          {
            question: "Store payment card data on its network? If 'Yes':",
            type: 'yesnona',
            questions: [
              {
                question: "For how long is such data stored on the Applicant's network?",
                type: 'string',
                uuid: '576bag',
              },
              {
                question: 'Is payment card data either encrypted or tokenized at all times?',
                type: 'yesnona',
                uuid: '7grqpl',
              },
              {
                question:
                  "If the payment card data is not encrypted or tokenized, please describe the Applicant's security measures to protect the data:",
                type: 'blob',
                uuid: '9gh5hc',
              },
            ],
            uuid: 'uqqi9k',
            Muuid: 'm-ftctsp',
          },
          {
            question: "Transact all payments through a payment processor? If 'Yes':",
            type: 'yesnona',
            questions: [
              {
                question: 'Who is the payment processor?',
                type: 'string',
                uuid: '3cdb5v',
              },
              {
                question:
                  'Has the payment processor provided evidence of its PCI DSS compliance to the Applicant?',
                type: 'yesnona',
                uuid: 'oc4tck',
              },
            ],
            uuid: 'iidnvi',
            Muuid: 'm-u4odok',
          },
          {
            question: 'Are 100% of your point to sale terminals EMV compliant?',
            type: 'yesnona',
            uuid: '1bo7j9',
          },
          {
            question:
              'If the Applicant has any further comments on questions in the section above, please elaborate below:',
            type: 'blob',
            uuid: 'g9svl5',
          },
        ],
        Muuid: 'm-5q8g15',
      },
      {
        sectionHeader: 'MULTIMEDIA ASSESSMENT',
        coverage: 'multimedia liability coverage',
        coverageKey: 'mm',
        groups: [
          {
            groupTitle: 'Does the Applicant:',
            questions: [
              {
                text: 'Have a process in place to review media content (website, social media or otherwise) for the following prior to publication?',
                questions: [
                  {
                    question: 'Infringement of copyright?',
                    type: 'yesnona',
                    uuid: 'p9lrok',
                  },
                  {
                    question: 'Infringement of trademark?',
                    type: 'yesnona',
                    uuid: 'inlaar',
                  },
                  {
                    question: 'Libel or slander?',
                    type: 'yesnona',
                    uuid: '11djpb',
                  },
                  {
                    question: 'Invasion of privacy?',
                    type: 'yesnona',
                    uuid: 'qi1bp4',
                  },
                ],
                Muuid: 'm-t45khg',
              },
              {
                question: 'Require a qualified attorney to review the above?',
                type: 'yesnona',
                questions: [
                  {
                    question:
                      "If 'No', please describe the procedures to avoid the posting of improper or infringing content:",
                    type: 'blob',
                    uuid: '1olp9o',
                  },
                ],
                uuid: 'b7tk22',
                Muuid: 'm-4qs1ml',
              },
              {
                question:
                  'Have a procedure for responding to any allegations which are in the nature of items 1. (i) to (iv) above?',
                type: 'yesnona',
                uuid: 'oa3gfl',
              },
              {
                text: "In respect of the Applicant's website:",
                questions: [
                  {
                    question:
                      'Does the Applicant record visitor acceptance of terms of use before access is granted?',
                    type: 'yesnona',
                    uuid: 'hjjn76',
                  },
                  {
                    question: "Does the website include third-party content? If 'Yes':",
                    type: 'yesnona',
                    questions: [
                      {
                        question: 'Does this content include streaming video and music?',
                        type: 'yesnona',
                        uuid: 'po6802',
                      },
                      {
                        question:
                          'Does the Applicant have procedures in place to secure rights for using all such third-party content?',
                        type: 'yesnona',
                        uuid: 'a6sc1r',
                      },
                      {
                        question:
                          'Does the Applicant allow third parties to post content directly to the website?',
                        type: 'yesnona',
                        uuid: 'fan9ni',
                      },
                      {
                        question:
                          'Does the Applicant monitor content for offensive, harassing, infringing or other undesirable material?',
                        type: 'yesnona',
                        uuid: '197n0g',
                      },
                      {
                        question:
                          "Does the Applicant reserve the right to remove or censor any content that violates the Applicant's acceptable terms of use?",
                        type: 'yesnona',
                        uuid: 'rpkiin',
                      },
                    ],
                    uuid: '4e8f0m',
                    Muuid: 'm-t524d3',
                  },
                ],
                Muuid: 'm-ge92p7',
              },
              {
                question:
                  'If the Applicant has any further comments on questions in the section above, please elaborate below:',
                type: 'blob',
                uuid: 'ifnlp3',
              },
            ],
            Muuid: 'm-1do2q1',
          },
          {
            groupTitle: 'Advertising activities',
            questions: [
              {
                question: 'Marketing/advertising costs',
                type: ['money', 'money', 'money'],
                labels: ['U.S. costs', 'Non-U.S. costs', 'Total costs'],
                headers: [null, 'Past fiscal year', 'Current fiscal year', 'Next fiscal year'],
                uuid: 'j4i5or',
              },
              {
                text: 'Advertising channels: Please indicate the approximate percentages of advertising/marketing spending in each of the following channels:',
              },
              {
                question: 'Television/cable',
                type: 'percent',
                uuid: 'e7uuba',
              },
              {
                question: 'Direct mail/catalog (print)',
                type: 'percent',
                uuid: 'paja0h',
              },
              {
                question: 'Newspapers (print)',
                type: 'percent',
                uuid: 'vagvd0',
              },
              {
                question: 'Digital/online (all channels)',
                type: 'percent',
                uuid: 'l92lcv',
              },
              {
                question: 'Magazines (print)',
                type: 'percent',
                uuid: 'ujla2i',
              },
              {
                question: 'Other, please describe',
                type: ['percent', 'string'],
                uuid: '5jhedp',
              },
              {
                question:
                  'Have a procedure for responding to any allegations which are in the nature of items 1. (i) to (iv) above?',
                type: 'yesnona',
                uuid: 'gt001f',
              },
              {
                question: 'How many trade or service marks does the Applicant currently own?',
                type: 'number',
                uuid: 'uv6spe',
              },
              {
                question:
                  "For the proposed policy period, does the Applicant plan to use any of the Applicant's existing trade or service marks in connections with any new class(es) of goods or services for which the marks have not previously been used?",
                type: 'yesnona',
                uuid: '5fksdd',
              },
              {
                question:
                  "Does the Applicant engage outside counsel specializing in trademark law in connections with the Applicant's advertising/marketing activities?",
                type: 'yesnona',
                uuid: 'hc9d9b',
              },
              {
                question:
                  'Does the Applicant always perform trademark clearance searches in connection with new marks or when expanding into new classes of goods or services?',
                type: 'yesnona',
                uuid: '11oomk',
              },
              {
                question:
                  'Does the Applicant operate an in-house advertising agency? (i.e., does the Applicant create advertising and/or marketing content internally)?',
                type: 'yesnona',
                uuid: 'b910bc',
              },
              {
                question:
                  'Does the Applicant employ outside advertising agencies to create advertising or marketing content?',
                type: 'yesnona',
                uuid: '16sstd',
              },
              {
                question:
                  'Does the Applicant utilize a website or social media to advertise or promote its products or services?',
                type: 'yesnona',
                uuid: 'po3tee',
              },
              {
                question: 'Does the Applicant have a written employee social media policy?',
                type: 'yesnona',
                uuid: 'ocv882',
              },
              {
                question:
                  'Does the Applicant have a process for legal review of all advertising, marketing, and promotional content, including website and social media content, prior to dissemination?',
                type: 'yesnona',
                uuid: 'gl42i4',
              },
              {
                question:
                  'Has the Applicant ever received notification that any of its advertising, marketing or promotional content infringes on the intellectual property rights of others?',
                type: 'yesnona',
                uuid: 'rfaoie',
              },
              {
                question:
                  'If the Applicant has any further comments on questions in the section above, please elaborate below:',
                type: 'blob',
                uuid: 'pl1529',
              },
            ],
            Muuid: 'm-7ha21o',
          },
          {
            groupTitle: 'Media risk control & legal review',
            questions: [
              {
                question:
                  'When providing technical, health-related or DIY related advice or guidance, does the Applicant always use a disclaimer or other warning?',
                type: 'yesnona',
                uuid: '1j5shc',
              },
              {
                question:
                  'Does the Applicant have formal, written policies and procedures for addressing requests to remove allegedly offensive or infringing content disseminated by or on behalf of Applicant?',
                type: 'yesnona',
                uuid: 'v05q5m',
              },
              {
                question:
                  'Does the Applicant permit any User Generated Content ("UGC"), whether in the form of comments, videos, audio recordings, photographs/images, or other content, to be uploaded or shared on any of Applicant\'s websites or mobile apps?',
                type: 'yesnona',
                uuid: 'rt2bkl',
              },
              {
                question:
                  "Please indicate which of the following additional quality control/risk management procedures the Applicant uses in connection with the Applicant's media activities (select all that apply):",
                type: ['checkbox', 'string'],
                options: [
                  'Website/social media content conduct and policy',
                  'Delay device used for live transmissions',
                  'Regular training of employees regarding libel and related claims',
                  'Regular training of employees regarding copyright, trademark, and other content claims',
                  'Other, please describe',
                ],
                uuid: 'du40h4',
              },
              {
                question:
                  'If the Applicant has any further comments on questions in the section above, please elaborate below:',
                type: 'blob',
                uuid: 'u2n2p0',
              },
            ],
            Muuid: 'm-j291i7',
          },
        ],
      },
      {
        sectionHeader: 'TECHNOLOGY E&O (INCLUDING MISCELLANEOUS PROFESSIONAL LIABILITY)',
        coverage: 'technology errors and omissions coverage',
        coverageKey: 'eo',
        groups: [
          {
            groupTitle: '(Complete only if applying for technology errors and omissions coverage)',
            questions: [
              {
                text: "Please provide a percentage breakdown of the Applicant's annual revenue between the following activities:",
                questions: [
                  {
                    question: 'Hardware',
                    type: ['string', 'percent', 'string'],
                    headers: [
                      'Services and products',
                      'Industries served',
                      'Estimated % of revenue',
                      'Length of time sold or provided',
                    ],
                    labels: [
                      'Sales of own brand',
                      'Distribution of other brands',
                      'Installation',
                      'Maintenance',
                    ],
                    uuid: 'skvo6u',
                  },
                  {
                    question: 'Software product sales',
                    type: ['string', 'percent', 'string'],
                    headers: [
                      'Services and products',
                      'Industries served',
                      'Estimated % of revenue',
                      'Length of time sold or provided',
                    ],
                    labels: [
                      'Sales of own brand shrink wrapped/off the shelf software',
                      'Distribution of other brand shrink wrapped/off the shelf software',
                      'Customizable software',
                    ],
                    uuid: '04288i',
                  },
                  {
                    question: 'Software services',
                    type: ['string', 'percent', 'string'],
                    headers: [
                      'Services and products',
                      'Industries served',
                      'Estimated % of revenue',
                      'Length of time sold or provided',
                    ],
                    labels: [
                      'Installation, including configuration (no coding involved)',
                      'Customization (including coding changes)',
                      'Maintenance',
                      'Systems integration',
                      'End-user applications',
                    ],
                    uuid: 'k3th12',
                  },
                  {
                    question: 'Services and products',
                    type: ['string', 'percent', 'string'],
                    headers: [
                      'Services and products',
                      'Industries served',
                      'Estimated % of revenue',
                      'Length of time sold or provided',
                    ],
                    labels: [
                      'Consultancy',
                      'Contract staff',
                      'Support services',
                      'Project management',
                      'Training',
                      'Data management/ processing',
                      'Data communication services',
                      'Internet service provision of hosting',
                    ],
                    uuid: 'qq6h9r',
                  },
                ],
                Muuid: 'm-o6psek',
              },
              {
                question: "Please indicate the Applicant's five largest contacts/ projects:",
                type: ['string', 'string', 'string'],
                headers: [
                  'Client',
                  'Product/service',
                  'Contract revenues for this year/total contract value',
                ],
                rows: 5,
                uuid: '370f5n',
              },
              {
                question:
                  'Does the Applicant provide professional services other those described above to customers or clients?',
                type: 'yesnona',
                questions: [
                  {
                    question: "If 'Yes', please describe:",
                    type: 'string',
                    uuid: 'pfavj0',
                  },
                  {
                    question:
                      'What percentage of your revenues are derived from such professional services?',
                    type: 'percent',
                    uuid: 'tfa0i0',
                  },
                ],
                uuid: 'leoedi',
                Muuid: 'm-k13vk9',
              },
              {
                question: 'What percentage of your work is performed by subcontractors?',
                type: 'percent',
                uuid: '8hop1i',
              },
              {
                text: 'Operations controls',
                questions: [
                  {
                    question:
                      'Does the Applicant have written contracts with all clients the Applicant performs work for or provides products to?',
                    type: 'yesnona',
                    questions: [
                      {
                        question: "If 'No', what percentage (%) of the time are they used?",
                        type: 'percent',
                        uuid: 'hpt5a2',
                      },
                    ],
                    uuid: 'en2g1p',
                    Muuid: 'm-fqgn54',
                  },
                  {
                    question:
                      'Do all services contracts with customers fully describe the scope of services to be provided?',
                    type: 'yesnona',
                    uuid: 'q8lhkh',
                  },
                  {
                    question:
                      'Do all contracts include how any disputes between the Applicant and the customer will be handled?',
                    type: 'yesnona',
                    uuid: 'hk8338',
                  },
                  {
                    text: 'Do all services and products contracts include provisions for the following:',
                    questions: [
                      {
                        question: 'Damages caps:',
                        type: 'yesnona',
                        questions: [
                          {
                            question: "If 'Yes', what is the standard cap on damages?",
                            type: 'string',
                            uuid: 'jsm23c',
                          },
                        ],
                        uuid: 'gvijjj',
                        Muuid: 'm-o7dh2l',
                      },
                      {
                        question: 'Disclaimer of implied warranties',
                        type: 'yesnona',
                        uuid: 'pthk68',
                      },
                      {
                        question: 'Guarantees',
                        type: 'yesnona',
                        uuid: 'o3ena8',
                      },
                      {
                        question: 'Full disclaimer of consequential damages',
                        type: 'yesnona',
                        questions: [
                          {
                            question:
                              "If 'No', please explain the circumstances when a full disclaimer of consequential damages is not provided:",
                            type: 'blob',
                            uuid: 'q5ha6u',
                          },
                        ],
                        uuid: 'i4moef',
                        Muuid: 'm-vitd6m',
                      },
                    ],
                    Muuid: 'm-tj6k2p',
                  },
                ],
                Muuid: 'm-8amr3m',
              },
            ],
            Muuid: 'm-j1l083',
          },
          {
            groupTitle: 'Contractual procedures & controls',
            questions: [
              {
                question:
                  'Does the Applicant require the use of written contracts for all engagements?',
                type: 'yesnona',
                uuid: 'ni4sp8',
              },
              {
                question: "What is the average length and value of the Applicant's contracts?",
                type: 'string',
                uuid: 'ej0dnq',
              },
              {
                question: 'Does the Applicant have a contractual review process?',
                type: 'yesnona',
                uuid: 'mk03lu',
              },
              {
                text: 'Please indicate the percentage of contracts used that are:',
              },
              {
                question: "Applicant's standard contract:",
                type: 'percent',
                uuid: '4haqni',
              },
              {
                question: "Customers' contracts:",
                type: 'percent',
                uuid: 'cenanp',
              },
              {
                question: 'Customized or combination:',
                type: 'percent',
                uuid: 'b0chof',
              },
              {
                question:
                  'Which of the following contractual provisions does Applicant always strive to impose in its favor in written contract (select all that apply)?',
                type: 'checkbox',
                options: [
                  'Disclaimer of warranties',
                  'Indemnification/hold harmless',
                  'Alternative dispute resolution',
                  'Limitation of liability',
                  'Exclusion of consequential damages',
                  'Performance milestones',
                  'Exclusive remedies for breach',
                  'Statement of work (SOW)',
                  'Force majeure',
                  'Choice of law or venue',
                ],
                uuid: 'pplk3q',
              },
              {
                question:
                  'Does the Applicant have a formal customer acceptance of work/project completion process?',
                type: 'yesnona',
                uuid: '7og1qk',
              },
              {
                question:
                  'Are performance milestones required to be accepted with signoff/approval by both parties?',
                type: 'yesnona',
                uuid: 'egtm62',
              },
              {
                question:
                  'Are interim changes to SOWs or contracts documented and approved by both parties?',
                type: 'yesnona',
                uuid: 'p76qi1',
              },
              {
                question:
                  "Please describe the person by title or position employed by Applicant who have authority to alter or amend Applicant's standard contract language:",
                type: 'blob',
                uuid: 'ddmabb',
              },
              {
                question:
                  'How many open/ongoing customer complaints/disputes is the Applicant currently handling?',
                type: 'blob',
                uuid: 'gu5f4i',
              },
            ],
            Muuid: 'm-7lvk88',
          },
          {
            groupTitle: 'Quality control/risk management procedures',
            questions: [
              {
                question: 'Does the Applicant employ a Risk Manager?',
                type: 'yesnona',
                questions: [
                  {
                    question:
                      "If you answered 'No' above, who is responsible for handling insurance-related matters?",
                    type: 'string',
                    uuid: 'c0hlp4',
                  },
                ],
                uuid: 'bob8oc',
                Muuid: 'm-t0sf9r',
              },
              {
                question:
                  'Does the Applicant have written policies and procedures for responding to customer complaints?',
                type: 'yesnona',
                uuid: 'i29ogo',
              },
              {
                question:
                  'Does the Applicant have an escalation procedure to respond to customer complaints?',
                type: 'yesnona',
                uuid: '4vii7b',
              },
              {
                question:
                  'Which of the following quality control procedures does Applicant employ (select all that apply)?',
                type: ['checkbox', 'string'],
                options: [
                  'Alpha testing',
                  'Customer support by email or text',
                  'Beta testing',
                  'Formalized training for new employees',
                  'Business continuity plan',
                  'Prototyping with testing',
                  'Customer screening process',
                  'Vendor certification and management procedures',
                  'Customer support by telephone',
                  'Written quality control standards and procedures',
                  'Customer support by web portal',
                  'Other (please describe):',
                ],
                uuid: 'bc0drm',
              },
            ],
            Muuid: 'm-o1egom',
          },
        ],
      },
      {
        sectionHeader: 'CYBER CRIME/SOCIAL ENGINEERING',
        coverage: 'cyber/social engineering coverage',
        coverageKey: 'csec',
        text: 'Does the Applicant:',
        questions: [
          {
            question: 'Make payments to third parties by wire transfers?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', how many times per week?",
                type: 'string',
                uuid: '9600vn',
              },
              {
                question: 'What is the most common amount transferred?',
                type: 'string',
                uuid: '0nk5q1',
              },
              {
                question:
                  'Do payments or transfers of a certain amount require dual authorization?',
                type: 'yesnona',
                uuid: 'boskg9',
              },
            ],
            uuid: 'd6vg2a',
            Muuid: 'm-ppfhs0',
          },
          {
            question:
              'Have procedures in place to verify the receipt of goods or services against an invoice prior to payment?',
            type: 'yesnona',
            uuid: 'nb0tbg',
          },
          {
            question:
              'Call a vendor using known prior telephone number to confirm any changes in bank account info, invoice amounts, location, contact number, fax number, etc.?',
            type: 'yesnona',
            uuid: '00geji',
          },
          {
            question:
              'Accept payments or funds transfer instructions from a customer or client relating to a refund or repayment of goods or services?',
            type: 'yesnona',
            questions: [
              {
                question:
                  "If 'Yes', what methods of receiving instructions are deemed acceptable (e.g. phone call, email, text message)?",
                type: 'string',
                uuid: 'rjvij0',
              },
            ],
            uuid: '9r0gjq',
            Muuid: 'm-a8elge',
          },
          {
            question:
              'Confirm all payments or funds transfers from a customer or client by a direct call to the customer or client using a previously known telephone number?',
            type: 'yesnona',
            uuid: '690sau',
          },
          {
            question:
              'Have procedures in place to verify the authenticity of any payment request made by an internal company source (another employee, etc.)?',
            type: 'yesnona',
            uuid: 's4aco7',
          },
          {
            question: 'Had any social engineering losses?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', please describe:",
                type: 'blob',
                uuid: 'sotgdv',
              },
            ],
            uuid: 'tmsm0v',
            Muuid: 'm-eh7d5s',
          },
        ],
        Muuid: 'm-kq5nrd',
      },
    ],
  },
  {
    title: 'Claims & insurance history',
    sections: [
      {
        sectionHeader: 'CLAIMS',
        questions: [
          {
            question:
              'In the last five (5) years has the Applicant received or sustained, or are there currently pending, any claims, complaints or incidents which may be covered under the proposed insurance and/or does the Applicant have knowledge of any fact, circumstance, situation, event, or transaction which may give rise to a claim or loss under the proposed insurance?',
            type: 'yesnona',
            questions: [
              {
                text: "If 'Yes', please provide details in an appendix to this application.",
              },
            ],
            uuid: '23b0od',
            Muuid: 'm-n0m152',
          },
        ],
        Muuid: 'm-tkj3tv',
      },
      {
        sectionHeader: 'INSURANCE HISTORY',
        questions: [
          {
            question:
              'During the last five (5) years, has any insurance policy providing substantially the same or similar insurance as the insurance being applied for under this application been declined, canceled or nonrenewed at the choice of the insurer?',
            type: 'yesnona',
            uuid: '5v9hsf',
          },
          {
            question:
              'Does the Applicant currently have insurance in place covering privacy or data security exposures?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', please confirm:",
                type: ['string', 'string', 'string', 'date', 'date', 'date', 'money'],
                headers: [
                  'Insurer',
                  'Aggregate policy limit',
                  'Self-insured retention',
                  'Inception date',
                  'Expiry date',
                  'Retroactive date',
                  'Premium',
                ],
                dynamicAdd: true,
                dynamicAddLabel: 'Add another insurer',
                uuid: 'frlnbm',
              },
            ],
            uuid: 'bdvevu',
            Muuid: 'm-p3ks2u',
          },
        ],
        Muuid: 'm-h4jdog',
      },
    ],
  },
  /*{
		"title":"Declaration",
		"text":"The undersigned authorized representative of the Applicant declares that the statements set forth herein are true. The signing of this application does not bind the undersigned or the insurer to complete the insurance. It is represented that the statements contained in this application and the materials submitted herewith are the basis of the contract should a policy be issued and have been relied upon by the insurer in issuing any policy. The insurer is authorized to make any investigation and inquiry in connection with this application as is reasonable and necessary. Nothing contained herein or incorporated herein by reference shall constitute notice of a claim or potential claim so as to trigger coverage under any contract of insurance.\n\nThis application and materials submitted with it shall be retained on file with the insurer and shall be deemed attached to and become part of the policy if issued. It is agreed in the event there is any material change in the answers to the questions contained in this application prior to the effective date of the policy, the Applicant will notify the Insurer in writing and any outstanding quotations may be modified or withdrawn at the insurer's discretion.\n\nMust be signed by a corporate officer with authority to sign on the Applicant's behalf.",
		"questions":[
			{
				"question":"Signed:",
				"type":"string",
				"uuid":"o70dop"
			},
			{
				"question":"Title:",
				"type":"string",
				"uuid":"i563re"
			},
			{
				"question":"Print name:",
				"type":"string",
				"uuid":"141bdc"
			},
			{
				"question":"Date:",
				"type":"date",
				"uuid":"naq98h"
			}
		],
		"Muuid":"m-hkkrct"
	},*/
  {
    title: 'Supplementary questions',
    sections: [
      {
        sectionHeader: 'SUPPLEMENT A — HEALTHCARE ASSESSMENT',
        questions: [
          {
            question: 'Is the Applicant compliant with HIPAA?',
            type: 'yesnona',
            uuid: 'nebekl',
          },
          {
            question: "When was the Applicant's compliance with HIPAA last reviewed?",
            type: 'date',
            uuid: 'ptp11f',
          },
          {
            question:
              'Does the Applicant host or use a healthcare exchange to share data with other healthcare organizations?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', please describe what data is being shared and with whom:",
                type: 'blob',
                uuid: 'j30lol',
              },
            ],
            uuid: '9a8aov',
            Muuid: 'm-v73vhu',
          },
        ],
        Muuid: 'm-58s8ac',
      },
      {
        sectionHeader: 'SUPPLEMENT B — OPERATIONAL TECHNOLOGY (E.G., SCADA, DCS, CIM, CNC, ETC.)',
        questions: [
          {
            question:
              'Please provide an overview of the Operational Technology (OT) on your network:',
            type: 'blob',
            uuid: 'ta681f',
          },
          {
            question:
              'Please provide an overview of the team responsible for OT and their reporting structure:',
            type: 'blob',
            uuid: 'ud1skq',
          },
          {
            question: 'Do you employ a dedicated OT cyber security professional?',
            type: 'yesnona',
            uuid: 'kb8d6t',
          },
          {
            question:
              'Do you maintain an up-to-date inventory of all IT and OT assets identifying 100% of your assets?',
            type: 'yesnona',
            questions: [
              {
                question:
                  'If not 100% please estimate the percentage of OT assets inventoried as well as any compensating controls for non-inventoried assets',
                type: ['percent', 'blob'],
                uuid: 'fgr7vk',
              },
            ],
            uuid: '5j4s5u',
            Muuid: 'm-n32ukr',
          },
          {
            question: 'What is the highest dependency you have on any one facility?',
            type: 'string',
            uuid: 'evj2up',
          },
          {
            question: 'What percentage of maximum capacity is your production facility running?',
            type: 'percent',
            uuid: 'oja8b7',
          },
          {
            question:
              'In the event of an outage, can you make up the lost production at the facility affected by adding shifts or running at a higher capacity at this or another facility?',
            type: 'yesnona',
            uuid: 'ftufv6',
          },
          {
            question:
              'How many days of finished inventory do you hold at your production facility or distribution warehouse?',
            type: 'number',
            uuid: '0kd9ev',
          },
          {
            question:
              'Does the Applicant utilize the following technologies to physically or logically segregate your IT and OT networks?',
            type: 'checkbox',
            options: ['Air Gap', 'DMZ', 'Firewall', 'VLAN'],
            questions: [
              {
                question:
                  'If VLAN is selected, please describe the degree to which traffic is restricted and what technical control is used to restrict traffic between the VLANs',
                type: 'blob',
                uuid: '10jkv0',
              },
            ],
            uuid: '52tgt9',
            Muuid: 'm-s4t0b6',
          },
          {
            question:
              'Do all OT assets using legacy software (e.g., Windows XP) have enhanced security?',
            type: 'yesnona',
            uuid: 't7t1g0',
          },
          {
            question: 'Is MFA required for remote access to OT environment?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'No', describe any additional security in place",
                type: 'blob',
                uuid: '0a96li',
              },
            ],
            uuid: 'dsfve7',
            Muuid: 'm-12oji7',
          },
          {
            question: 'Are the following in place to further secure your OT environment?',
            type: 'checkbox',
            options: [
              'Application whitelisting',
              'Disabled removable devices',
              'Managed security patching',
              'Intrusion detection systems',
              'Intrusion prevention system',
              'SIEM',
              'Endpoint protection',
              'Third-party penetration testing',
            ],
            uuid: '0lnag7',
          },
          {
            question:
              'Have all default usernames and passwords in the OT environment been removed/modified?',
            type: 'yesnona',
            uuid: 'hdire6',
          },
          {
            question: 'Do you allow remote access to OT environment?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'Yes', what security is in place:",
                type: 'blob',
                uuid: 'tauk7s',
              },
            ],
            uuid: 'g6m6s7',
            Muuid: 'm-if502c',
          },
          {
            question:
              'Is the use of removable devices (e.g., USB memory sticks) disabled within the OT environment?',
            type: 'yesnona',
            questions: [
              {
                question: "If 'No', what security is in place:",
                type: 'blob',
                uuid: 'eoud7g',
              },
            ],
            uuid: 'drmfsb',
            Muuid: 'm-vei7tv',
          },
          {
            question:
              'Is the use of removable devices (e.g., USB memory sticks) disabled within the OT environment?',
            type: 'yesnona',
            questions: [
              {
                question: 'Why are these systems still in place?',
                type: 'blob',
                uuid: '7f85ln',
              },
              {
                question: 'Are there any compensating controls in place to mitigate the risk?',
                type: 'blob',
                uuid: 'p3pnn2',
              },
              {
                question: 'What plans exist to upgrade or remove these systems?',
                type: 'blob',
                uuid: 'fvi9i6',
              },
            ],
            uuid: 'ccig8o',
            Muuid: 'm-6ojtsh',
          },
          {
            question:
              'Do you prevent browsing the Internet and checking email on industrial systems?',
            type: 'yesnona',
            uuid: 'am7h7h',
          },
          {
            question: 'Is OT restoration explicitly addressed in your disaster recovery plan?',
            type: 'yesnona',
            uuid: 'vnuejb',
          },
          {
            question: 'Are your OT environments included in your backup strategy?',
            type: 'yesnona',
            questions: [
              {
                question:
                  'Please describe any difference between how they are stored and other backups',
                type: 'blob',
                uuid: 'li76ni',
              },
            ],
            uuid: 'rbtn9p',
            Muuid: 'm-idjr6q',
          },
        ],
        Muuid: 'm-5isul6',
      },
      {
        sectionHeader: 'SUPPLEMENT C - PRIVILEGED SERVICE ACCOUNT APPENDIX',
        questions: [
          {
            headers: [
              'Name of account',
              'Privileges it has',
              'Software product it supports',
              'What hosts it authenticates to',
              'Why are the privileges required',
            ],
            type: ['string', 'select', 'string', 'select', 'string'],
            options: [
              {
                'Privileges it has': [
                  'Domain Admin (DA)',
                  'Enterprise Admins (EA)',
                  '(Domain) Administrators (BA)',
                ],
              },
              {
                'What hosts it authenticates to': [
                  'Solely Domain Controllers (DC)',
                  'Servers (may include DCs), but not Workstations',
                  'Workstations (may or may not include servers and DCs)',
                ],
              },
            ],
          },
        ],
        Muuid: 'm-0geu0t',
      },
    ],
  },
]

export default LocktonData
