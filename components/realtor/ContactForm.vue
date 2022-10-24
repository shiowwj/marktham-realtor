<template>
    <FormulateForm @submit="submitForm()" form>
        <h2 class="text-2xl mb-2">Let's get in touch!</h2>
        <FormulateInput v-model="name" label="Name *"
            label-class="block text-agency-p-dark text-base lg:text-xl font-bold"
            input-class="px-3 py-3 placeholder-gray-400 text-agency-p-dark bg-agency-p-light rounded-sm text-base lg:text-xl border rounded-lg border-agency-s-dark focus:outline-none focus:ring w-full mb-3"
            placeholder="" style="transition: all 0.15s ease 0s;" validation="required" type="text"
            errors-class="text-agency-a-orange text-xs lg:text-base mb-3"
            help-class="text-blue-400 italic text-xs mb-3" />
        <FormulateInput v-model="contactEmail" label="Email *"
            label-class="block text-agency-p-dark text-base lg:text-xl font-bold mb-2"
            input-class="px-3 py-3 placeholder-gray-400 text-agency-p-dark bg-agency-p-light rounded-sm text-base lg:text-xl border rounded-lg border-agency-s-dark focus:outline-none focus:ring w-full  mb-3"
            placeholder="" style="transition: all 0.15s ease 0s;" validation="required" type="email"
            errors-class="text-agency-a-orange text-xs lg:text-base mb-3"
            help-class="text-blue-400 italic text-xs mb-3" />
        <FormulateInput v-model="phone" label="Phone Number *"
            label-class="block text-agency-p-dark text-base lg:text-xl font-bold mb-2"
            input-class="px-3 py-3 placeholder-gray-400 text-agency-p-dark bg-agency-p-light rounded-sm text-base lg:text-xl border rounded-lg border-agency-s-dark focus:outline-none focus:ring w-full  mb-3"
            placeholder="" style="transition: all 0.15s ease 0s;" type="tel" validation="required"
            errors-class="text-agency-a-orange text-xs lg:text-base mb-3"
            help-class="text-blue-400 italic text-xs mb-3" />
        <FormulateInput v-model="additionalInfo" label="Let us know what help you need with *" type="textarea"
            placeholder="" style="transition: all 0.15s ease 0s;" validation=""
            label-class="block text-agency-p-dark text-base lg:text-xl font-bold mb-2"
            input-class="px-3 py-3 placeholder-gray-400 text-agency-p-dark bg-agency-p-light rounded-sm text-base lg:text-xl border rounded-lg border-agency-s-dark focus:outline-none focus:ring w-full  mb-3"
            errors-class="text-agency-a-orange text-xs lg:text-base mb-3"
            :options="{ first: 'First', second: 'Second', third: 'Third', fourth: 'Fourth' }"
            help-class="text-blue-400 italic text-xs mb-3" />

        <div v-if="!submitSuccess" class="mt-6 flex text-center justify-center">
            <FormulateInput class="form-submit-button" style="transition: all 0.15s ease 0s;" type="submit"
                label="Send Message" />
        </div>
        <div v-if="submitSuccess" class="text-center mt-6">
            <button
                class="form-submit-button-complete shadow outline-none focus:outline-none tracking-normal cursor-none"
                type="button" style="transition: all 0.15s ease 0s;">
                Thank you :) We will get in touch with you shortly.
            </button>
        </div>
    </FormulateForm>

</template>
<script>

export default {
    data() {
        return {
            name: "",
            contactEmail: "",
            phone: "",
            additionalInfo: "",
            submitSuccess: false,
        }
    },
    methods: {
        async submitForm() {
            if (this.submitSuccess) {
                return;
            }

            const data = {
                fields: {
                    Name: this.name,
                    Email: this.contactEmail,
                    Phone: this.phone,
                    AdditionalInformation: this.additionalInfo,
                }
            }

            if (this.createItemRequest(data)) {
                this.resetDisableForm();
            } else {
                console.error("something went wrong");
            }
        },
        async createItemRequest(data) {
            const headers = {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.NUXT_ENV_AIRTABLE_API_KEY,
            };
            const url = `https://api.airtable.com/v0/${process.env.NUXT_ENV_AIRTABLE_APP}/${process.env.NUXT_ENV_AIRTABLE_CONTACT}`;
            try {
                let response = await this.$axios.post(url, data, { headers: headers });
                if (response.status === 200) {
                    return true;
                }
            } catch (error) {
                console.error("error!", error);
                return false;
            }
        },
        resetDisableForm() {
            this.submitSuccess = true;
            this.clearFormValues()
            return;
        },
        clearFormValues() {
            this.name = ""
            this.contactEmail = ""
            this.phone = ""
            this.additionalInfo = ""
        }
    }
}
</script>
<style scoped>
.form-submit-button {
    @apply lg:ml-8 bg-template-a-blue text-template-p-light active:bg-template-s-light active:text-template-p-dark text-base lg:text-lg font-bold px-5 py-3 shadow hover:bg-template-s-light hover:z-40 hover:opacity-100 outline-none hover:text-template-p-dark focus:outline-none mr-1 mb-1 rounded tracking-wide hover:border-2 hover:border-template-s-dark;
}

.form-submit-button-complete {
    @apply lg:ml-8 bg-template-a-blue text-template-p-light text-base lg:text-lg font-bold px-5 py-3 shadow outline-none mb-1 rounded tracking-wide;
}
</style>