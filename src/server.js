import { createServer, Model } from 'miragejs';

createServer({
  models: {
    patients: Model,
  },
  seeds(server) {
    server.create('patient', {
      id: 001,
      uid: 'f455112e-f908-4912-a05e-e90732dbb8e5',
      password: 'lzRcPqBFJC',
      first_name: 'Lizzette',
      last_name: 'Shields',
      username: 'lizzette.shields',
      email: 'lizzette.shields@email.com',
      avatar: 'https://robohash.org/itaqueeapariatur.png?size=300x300&set=set1',
      gender: 'Genderqueer',
      phone_number: '+850 1-187-178-9501 x683',
      social_insurance_number: '643318413',
      date_of_birth: '1997-03-04',
      tag: 'old',
      address: {
        city: 'Erictown',
        street_name: 'Labadie Lake',
        street_address: '944 Raul Orchard',
        zip_code: '01249-5610',
        state: 'Arizona',
        country: 'United States',
        coordinates: {
          lat: -50.95211356530548,
          lng: -68.39500493751315,
        },
      },
      credit_card: {
        cc_number: '4618-5629-8326-2911',
      },
      subscription: {
        plan: 'Premium',
        status: 'Blocked',
        payment_method: 'Cash',
        term: 'Payment in advance',
      },
    });
    server.create('patient', {
      id: 002,
      uid: '50f78420-204c-4315-bdc5-1c000a56364f',
      password: 'fcqCUIznjX',
      first_name: 'Latricia',
      last_name: "D'Amore",
      username: "latricia.d'amore",
      email: "latricia.d'amore@email.com",
      avatar:
        'https://robohash.org/expeditatemporibusaliquam.png?size=300x300&set=set1',
      gender: 'Genderqueer',
      phone_number: '+61 518-855-0142 x847',
      social_insurance_number: '950978080',
      date_of_birth: '1993-04-26',
      tag: 'sick',
      address: {
        city: 'Velvetland',
        street_name: 'Jeri Stream',
        street_address: '1546 Demarcus Wall',
        zip_code: '49340-6581',
        state: 'Kentucky',
        country: 'United States',
        coordinates: {
          lat: -87.46980404098117,
          lng: -1.6945710847825808,
        },
      },
      credit_card: {
        cc_number: '6771-8998-6569-9705',
      },
      subscription: {
        plan: 'Platinum',
        status: 'Active',
        payment_method: 'Google Pay',
        term: 'Full subscription',
      },
    });
    server.create('patient', {
      id: 003,
      uid: '9daf93d0-4760-4259-b1dc-511e1f3bcdde',
      password: 'NHOTJhMjnC',
      first_name: 'Cleo',
      last_name: 'Blick',
      username: 'cleo.blick',
      email: 'cleo.blick@email.com',
      avatar:
        'https://robohash.org/velitdoloresdolorem.png?size=300x300&set=set1',
      gender: 'Genderfluid',
      phone_number: '+32 1-657-915-3563 x461',
      social_insurance_number: '988801544',
      date_of_birth: '1985-11-23',
      tag: 'sick',
      address: {
        city: 'North Yanira',
        street_name: 'Eda Trail',
        street_address: '2519 Tiny Brooks',
        zip_code: '17885-3457',
        state: 'South Dakota',
        country: 'United States',
        coordinates: {
          lat: -87.0866862385559,
          lng: -135.36750878814115,
        },
      },
      credit_card: {
        cc_number: '4688867651950',
      },
      subscription: {
        plan: 'Standard',
        status: 'Active',
        payment_method: 'Credit card',
        term: 'Annual',
      },
    });
    server.create('patient', {
      id: 004,
      uid: 'c927bfb7-d545-45ad-84d2-f7330f197f63',
      password: 'x2jodqGRIT',
      first_name: 'Raphael',
      last_name: 'Jast',
      username: 'raphael.jast',
      email: 'raphael.jast@email.com',
      avatar: 'https://robohash.org/estsunteaque.png?size=300x300&set=set1',
      gender: 'Bigender',
      phone_number: '+65 446-060-2196 x823',
      social_insurance_number: '281831396',
      date_of_birth: '1986-11-23',
      tag: 'old',
      address: {
        city: 'Beataton',
        street_name: 'Esteban Shore',
        street_address: '12382 Brown Crossing',
        zip_code: '98581-0011',
        state: 'California',
        country: 'United States',
        coordinates: {
          lat: 13.462038899401122,
          lng: 77.76386222913214,
        },
      },
      credit_card: {
        cc_number: '4550766485726',
      },
      subscription: {
        plan: 'Platinum',
        status: 'Idle',
        payment_method: 'Money transfer',
        term: 'Full subscription',
      },
    });
    server.create('patient', {
      id: 005,
      uid: '8cf4b5db-3d89-4cb1-afd5-c73cbe23db78',
      password: 'FwBs3GkKC8',
      first_name: 'Norma',
      last_name: 'Ferry',
      username: 'norma.ferry',
      email: 'norma.ferry@email.com',
      avatar:
        'https://robohash.org/corporisharumsunt.png?size=300x300&set=set1',
      gender: 'Female',
      phone_number: '+374 (729) 103-3774',
      social_insurance_number: '125692947',
      date_of_birth: '2004-12-03',
      tag: 'young',
      address: {
        city: 'Shanahanside',
        street_name: 'Morissette Ridges',
        street_address: '91721 West Radial',
        zip_code: '75162-1045',
        state: 'Utah',
        country: 'United States',
        coordinates: {
          lat: 23.869697438773557,
          lng: -21.546372916928874,
        },
      },
      credit_card: {
        cc_number: '4355-2929-6397-1623',
      },
      subscription: {
        plan: 'Premium',
        status: 'Idle',
        payment_method: 'Apple Pay',
        term: 'Monthly',
      },
    });
    server.create('patient', {
      id: 006,
      uid: '4ef3d899-221c-4cfb-ba48-ebebdd8d791b',
      password: '69AJGFmSIZ',
      first_name: 'Quentin',
      last_name: 'VonRueden',
      username: 'quentin.vonrueden',
      email: 'quentin.vonrueden@email.com',
      avatar: 'https://robohash.org/utundecommodi.png?size=300x300&set=set1',
      gender: 'Genderfluid',
      phone_number: '+679 445-784-9555 x44693',
      social_insurance_number: '639831783',
      date_of_birth: '1999-09-13',
      tag: 'old',
      address: {
        city: 'Wesleyfort',
        street_name: 'Vida Passage',
        street_address: '38087 Leonore Skyway',
        zip_code: '09845',
        state: 'New York',
        country: 'United States',
        coordinates: {
          lat: 82.29160202391577,
          lng: 77.85504808352391,
        },
      },
      credit_card: {
        cc_number: '6771-8944-6470-7371',
      },
      subscription: {
        plan: 'Diamond',
        status: 'Pending',
        payment_method: 'WeChat Pay',
        term: 'Monthly',
      },
    });
    server.create('patient', {
      id: 007,
      uid: '18d0ed7c-0c75-42af-86f6-8c050826b008',
      password: 'YpEybPKg9x',
      first_name: 'Rico',
      last_name: 'Greenfelder',
      username: 'rico.greenfelder',
      email: 'rico.greenfelder@email.com',
      avatar: 'https://robohash.org/commodiquiavitae.png?size=300x300&set=set1',
      gender: 'Male',
      phone_number: '+221 178.693.4705',
      social_insurance_number: '708730205',
      date_of_birth: '1991-04-09',
      tag: 'sick',
      address: {
        city: 'Lake Evaton',
        street_name: 'Lesch Tunnel',
        street_address: '6078 Penney Road',
        zip_code: '19286',
        state: 'Alabama',
        country: 'United States',
        coordinates: {
          lat: 32.455090612050014,
          lng: -155.37990188025293,
        },
      },
      credit_card: {
        cc_number: '4568523078527',
      },
      subscription: {
        plan: 'Diamond',
        status: 'Blocked',
        payment_method: 'Paypal',
        term: 'Annual',
      },
    });
    server.create('patient', {
      id: 008,
      uid: '774c57b2-eb4b-4158-979b-b8a65d7b42df',
      password: 'Rrotxgd2ZN',
      first_name: 'Ezra',
      last_name: 'Weissnat',
      username: 'ezra.weissnat',
      email: 'ezra.weissnat@email.com',
      avatar:
        'https://robohash.org/quaeratprovidentqui.png?size=300x300&set=set1',
      gender: 'Polygender',
      phone_number: '+503 204-460-4594 x25345',
      social_insurance_number: '626631857',
      date_of_birth: '1980-01-10',
      tag: 'young',
      address: {
        city: 'South Donnyshire',
        street_name: 'McCullough Circles',
        street_address: '87412 Dick Point',
        zip_code: '27408',
        state: 'Illinois',
        country: 'United States',
        coordinates: {
          lat: -42.36078273463968,
          lng: -75.7124248586246,
        },
      },
      credit_card: {
        cc_number: '5480-9851-4604-8921',
      },
      subscription: {
        plan: 'Student',
        status: 'Pending',
        payment_method: 'Google Pay',
        term: 'Annual',
      },
    });
    server.create('patient', {
      id: 009,
      uid: '4cfe21ec-65c1-4b5b-ab46-611e723f174a',
      password: 'h4FVr39UnG',
      first_name: 'Sheldon',
      last_name: 'Mayert',
      username: 'sheldon.mayert',
      email: 'sheldon.mayert@email.com',
      avatar:
        'https://robohash.org/inventorenihilassumenda.png?size=300x300&set=set1',
      gender: 'Agender',
      phone_number: '+57 338.752.3082 x3485',
      social_insurance_number: '504860578',
      date_of_birth: '1973-07-26',
      tag: 'sick',
      address: {
        city: 'Hahnstad',
        street_name: 'Nicolas Canyon',
        street_address: '684 Zane Inlet',
        zip_code: '57459',
        state: 'Florida',
        country: 'United States',
        coordinates: {
          lat: -42.04043045528733,
          lng: 138.79709480552634,
        },
      },
      credit_card: {
        cc_number: '5194-2428-9027-4437',
      },
      subscription: {
        plan: 'Gold',
        status: 'Blocked',
        payment_method: 'Google Pay',
        term: 'Full subscription',
      },
    });
    server.create('patient', {
      id: 010,
      uid: '9cf0e379-19da-4cce-9a4c-0fe74c34280c',
      password: 'by3E2nLkD7',
      first_name: 'Hilaria',
      last_name: 'Bartell',
      username: 'hilaria.bartell',
      email: 'hilaria.bartell@email.com',
      avatar: 'https://robohash.org/nonetanimi.png?size=300x300&set=set1',
      gender: 'Genderqueer',
      phone_number: '+976 1-472-510-7012 x7397',
      social_insurance_number: '978223923',
      date_of_birth: '1961-05-16',
      tag: 'old',
      address: {
        city: 'South Leroy',
        street_name: 'Toy Mill',
        street_address: '523 Jean Freeway',
        zip_code: '87828',
        state: 'Arkansas',
        country: 'United States',
        coordinates: {
          lat: -11.073064584060475,
          lng: -155.53396839759378,
        },
      },
      credit_card: {
        cc_number: '4691104243615',
      },
      subscription: {
        plan: 'Gold',
        status: 'Pending',
        payment_method: 'Apple Pay',
        term: 'Full subscription',
      },
    });
  },

  routes() {
    this.namespace = 'api';
    this.logging = false;

    this.get('/patients', (schema, request) => {
      // return new Response(400, {}, { error: 'Error fetching data' });
      return schema.patients.all();
    });
    this.get('/patients/:id', (schema, request) => {
      // Hard-code the hostId for now
      return schema.patient.where({ tag: 'old' });
    });

    this.get('/patients/:id', (schema, request) => {
      const id = request.params.id;
      return schema.patient.find(id);
    });
  },
});
