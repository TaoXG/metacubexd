import { createForm } from '@felte/solid'
import { validator } from '@felte/validator-zod'
import { useNavigate } from '@solidjs/router'
import { IconX } from '@tabler/icons-solidjs'
import ky from 'ky'
import { For } from 'solid-js'
import { v4 as uuid } from 'uuid'
import { z } from 'zod'
import { endpointList, setEndpointList, setSelectedEndpoint } from '~/signals'

const schema = z.object({
  url: z.string().url().nonempty(),
  secret: z.string(),
})

export const Setup = () => {
  const navigate = useNavigate()

  const { form } = createForm<z.infer<typeof schema>>({
    extend: validator({ schema }),
    async onSubmit(values) {
      const { hello } = await ky.get(values.url).json<{ hello: string }>()

      if (!hello) {
        return
      }

      setEndpointList([
        {
          id: uuid(),
          url: values.url,
          secret: '',
        },
        ...endpointList(),
      ])
    },
  })

  const onRemove = (id: string) =>
    setEndpointList(endpointList().filter((e) => e.id !== id))

  return (
    <div class="mx-auto flex w-2/3 flex-col items-center gap-4 py-10">
      <form class="contents" use:form={form}>
        <div class="join flex w-full">
          <input
            name="url"
            type="url"
            class="input join-item input-bordered flex-1"
            placeholder="http://127.0.0.1:9000"
            list="defaultEndpoints"
          />

          <datalist id="defaultEndpoints">
            <option value="http://127.0.0.1:9000" />
          </datalist>

          <input
            name="secret"
            type="password"
            autocomplete="new-password"
            class="input join-item input-bordered"
            placeholder="secret"
          />

          <button type="submit" class="btn btn-primary join-item uppercase">
            Add
          </button>
        </div>
      </form>

      <div class="flex w-full flex-col gap-4">
        <For each={endpointList()}>
          {({ id, url }) => (
            <div
              class="badge badge-info flex w-full cursor-pointer items-center gap-4 py-4"
              onClick={() => {
                setSelectedEndpoint(id)
                navigate('/')
              }}
            >
              {url}

              <button
                class="btn btn-circle btn-ghost btn-xs text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  onRemove(id)
                }}
              >
                <IconX />
              </button>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}