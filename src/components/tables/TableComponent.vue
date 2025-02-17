<template>
    <div class="rounded-sm bg-white shadow-md">

        <!-- table data -->
        <div class="" v-if="tableData?.length > 0">
            <!-- table -->
            <div class="overflow-x-auto">
                <table class="text-sm min-w-[900px] w-full">
                    <!-- thead -->
                    <tr class="text-sm font-semibold px-4 py-2 bg-slate-100 border-b">
                        <template v-for="(head, index) in tableHead" :key="head?.head">
                            <th class="text-left px-2 py-4" :class="{ '!pl-4': index === 0 }">{{ head?.title }}</th>
                        </template>
                        <th class="text-left px-2 py-4" v-if="actions">Actions</th>
                    </tr>

                    <!-- tbody -->
                    <template v-for="(data) in tableData" :key="data?.id">
                        <tr class="border-b">
                            <template v-for="(item, index) in Object.keys(data)" :key="index">
                                <template v-if="!exclude?.includes(item)">
                                    <td class="text-left px-2 py-4" :class="{ '!pl-4': index === 0 }"
                                        v-if="item === badge?.column">
                                        <BadgeComponent class="w-fit text-xs font-semibold"
                                            :type="getStatus(data[item])">
                                            {{ data[item] }}
                                        </BadgeComponent>
                                    </td>
                                    <td v-else class="text-left px-2 py-4" :class="{ '!pl-4': index === 0 }">{{
                                        data[item] }}</td>
                                </template>
                            </template>

                            <!-- actions -->
                            <td class="text-left px-2 py-4" v-if="actions">
                                <div class="flex gap-2">
                                    <router-link v-if="actions.view"
                                        :to="{ name: actions.view.link, params: { id: data[actions.view.param] } }">
                                        <Icon icon="heroicons:eye" class="gray-text text-xl cursor-pointer" />
                                    </router-link>
                                    <router-link v-if="actions.edit"
                                        :to="{ name: actions.edit.link, query: { edit: data[actions.edit.param] } }">
                                        <Icon icon="heroicons:pencil" class="gray-text text-xl cursor-pointer" />
                                    </router-link>
                                    <router-link v-if="actions.delete"
                                        :to="{ name: actions.delete.link, query: { delete: data[actions.delete.param] } }">
                                        <Icon icon="heroicons:trash" class="text-red-500 text-xl cursor-pointer" />
                                    </router-link>

                                </div>
                            </td>
                        </tr>
                    </template>
                </table>
            </div>

            <!-- Pagination -->
            <div class="flex justify-end p-4 text-sm">
                <div class="flex items-center gap-2">
                    <p class="gray-text">Previous</p>
                    <div class="px-3 py-1.5 bg-cyan-500 rounded-md text-white">1</div>
                    <p class="text-cyan-500">Next</p>
                </div>
            </div>
        </div>

        <!-- table loading -->
        <div class="flex justify-center py-10" v-else-if="loading">
            <div class="">
                <Icon icon="line-md:loading-loop" class="text-6xl text-cyan-800 mx-auto" />
                <p>Fetching data...</p>
            </div>
        </div>

        <!-- No data -->
        <div class="flex justify-center py-10" v-else>
            <NoResults>
                <ButtonComponent :text="noResults.buttonText" icon="heroicons:plus" type="info" @click="$emit('add')" />
            </NoResults>
        </div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import NoResults from '../ui/NoResults.vue';
import ButtonComponent from '../ui/ButtonComponent.vue';
import BadgeComponent from '../ui/BadgeComponent.vue';
const { loading, tableData, tableHead, actions, noResults, badge, getStatus } = defineProps({
    loading: Boolean,
    tableHead: {
        type: Object,
        required: true,
    },
    tableData: {
        type: Object,
        required: true,
    },
    actions: {
        type: Object,
    },
    noResults: {
        type: Object,
        default: () => {
            return {
                buttonText: 'Add'
            }
        }
    },
    badge: {
        type: Object,
        // default: () => {
        //     return {
        //         column: 'status' //object property name to have badge
        //     }
        // }
    },
    getStatus: {
        type: Function,
        default() {
            return 'Default function'
        }
    },
    exclude: {
        type: Array,
    }
})

// this is what the actions object should look like
// {
//     view: {
//             link: '',
//             param: '',
//           },
//     edit: {
//             link: '', //name of link to direct to
//             param: '', //object property name to be used as param
//           },
//     delete: {
//             link: '',
//             param: '',
//             },
// }

// this is what the bagde object should look like
//     {
//         column: 'status' //object property name to have badge
//     }

</script>

<style scoped></style>