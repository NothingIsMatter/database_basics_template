# Модель прецедентів


![uml](http://www.plantuml.com/plantuml/png/ZLNDQXDH5DxFKrowSPNO114fRMY9Mq6GxWfbcjwcmUcCp4m4nKLQiMwABI8HfTBMli0mRThO9fDNEFCAFedV_PdBpUY0ct3l-VdE-RvpJsOrYjqmxkzvJjZhxiPibxlRF7IMTm8_Pb7lBLzfFcATm0l2bItFxRniFSUFs-LBR7chjTv-kjceDnpkRnU9JjoBFMxdDvxCvTC5ZV81fVamtsUKq9JkO3Z8trCgRlaHUz4FN_EkwxjpA8_dKKufesiQqJqIQ9OFW7588scQ0cr8gUnATUEudJW8sGAT8soVPiYT5g4Bp8tOUiH34tG2PmBWONv0OxgJ0Mk-wxs9OXFp5H4JmAGqDJ7jVXG7UnRGgQWWcxeHd6NGC_3g2fqUiFKsZzWE8aNr9QSVyOuRSROWXTriB3_SQctuT2u14heg54BJnqoQK3h_W90xol81plk5ZFb7IXIlTcDJe9V1cmfSqfXf6gC2EeDfR4z4GpK1LUfSorBP_9dW3UGho7bCrqnURe6CiK7TH4qAWHKrqRukKSNWCurj_aOWu4wb80DWJiYy2iD5uzfqp0Gh-LoWGYgh6RMcKhuC5BCo3nLYc1JeLLGg9bqz3WDeSr0Fh9h22QKWaK6JHBxlMyfqjGIBfETrhTwGjP_8nCgg4TexP8Hbk6HAzWEruRy7t_9FuYZSHWNPNxK8NoZJxtYc4EMQtT0zMasL3pL_CJ5gjVW9fVykIyc6hyAI-Oscn4XehUEQsDg8TGBVvvsu5_YHusWtg_LhjNSjkQXbcnb2oMxU5vAaiMMsqJQPhTBnh1Rgo0B0EBPrVDbXi4qhjgVqKehJtrcsgvncoA49dQOjjgSrBwdweEm4GOoR-LDdhmBFOn7QutjrzX__utM7Vj1FkgHBHj_fZ0uPh9Cw7TQnZaEr_7WMHpZ9BNGGDHQ9jUPYSr5-1NGFgpZZI_S7)

# Специфікації прецедентів

### Авторизація користувача

***ID:*** UC.1.1

***НАЗВА:***  Авторизація користувача в системі.

***УЧАСНИКИ:***  Користувач, Система.

***ПЕРЕДУМОВИ:***  Існування облікового запису користувача.

***РЕЗУЛЬТАТ:***  Вхід користувача в обліковий запис.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

•	EX.1.1. Відсутній обліковий запис користувача.

•	EX.1.2. Введено некоректну адресу електронної пошти.

•	EX.1.3. Введено некоректний пароль.

###### ДІАГРАМА СЦЕНАРІЮ:
![uml](http://www.plantuml.com/plantuml/png/jPB1IiD048RlUOfz09yWlVJgsQkNWaKARHGRRpcaMSMBs8jK44GyUrcM1AHfKkWJ_FD6_ZkDv22A20qiEplC_FytcntEqz5LUZsRHXcUqKgE3rb88HOUJkwooF3J6erYl31TX2Ai6JqQRWrQRB4MQqwJtVl9v3mnnyck7cX7XhUz92fiuB9EvfLExE9gn596RjHyeo8eKSlImCijMfHY6HfPz3fYU_aVgMCymQc5fya3JVH0vPWUuzbeCZqAAIUvfkz_1qObELDULfBBCgXvU2PAhaPMUsmNma5_LOGdDkglg-8qvjjq_vu4LTo97WHTeRcr7T5M3w7QwS-tx2Z-W3zFBowZuJWvupFx1000)


---

### Реєстрація користувача

***ID:*** UC.1.2

***НАЗВА:***  Реєстрація користувача в системі.

***УЧАСНИКИ:***  Користувач, Система.

***ПЕРЕДУМОВИ:***  Відсутність облікового запису користувача.

***РЕЗУЛЬТАТ:***  Створення нового облікового запису користувача.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

•	EX.2.1. Наявність облікового запису користувача у системі.

•	EX.2.2. Не задано пароль та/або адресу електронної пошти.

###### ДІАГРАМА СЦЕНАРІЮ:
![uml](http://www.plantuml.com/plantuml/png/hL9DIiDG4Dxd5Ey4FK2wwHt4NJS5YnJQMBJkieYDs8tOJKb1477jvfdcWJHD0Zt1DpToPbuGKGW8JHQPzysRxuVCu6OnkbxSpgP1Z6VKbE2JxcX9AN9OMiM1uKVlQ1NYXU6bNCAUgutXJuKQ3VQKcc5qV3-RN4RcV7ui-peHuyrJmk406xSqhwmaKpKgIfc6xbNye2GeKDBQI9jMgYVat7Qq4IgkB3rGHbklqM4zn1PMTN9MUc8bFPHm8Gj94ZISuUyuxB_y8wSCXG2-4lXdA1_fz1bGShLZnQedgAL4ElGuZCQpqMHgA3DilUXrXu4JO-AS4bfh77uT2ZXMpFmliLBslnrzo10BxtGDVlTvJGJodRhDrEX1sAni3oELu7wcS_-kvi5W75tmddu1)


---

### Проходження опитування

***ID:*** UC.1.3

***НАЗВА:***  Надання нової анкети системою та проходження опитування респондентом.

***УЧАСНИКИ:***  Респондент, Система.

***ПЕРЕДУМОВИ:***  Користувач авторизований у системі.

***РЕЗУЛЬТАТ:***  Опитування пройдене.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

•	EX.3.1. Опитування було перервано користувачем.

###### ДІАГРАМА СЦЕНАРІЮ:
![uml](http://www.plantuml.com/plantuml/png/dP8nJiD044LxdsALOoHD3aA311q4H4pd8jX2K23I8AWGKDCO9qii1zjIJl3dHloPLPG6Lb7SUFttptyp8u-dwV5LUdr-bcHuXvSRzEZGOWcFLl8iSNpCOwSXNb5AZfh6XgSdnrVBYXwD5EveilbaJ8ULniXTy3gxhoMN0XLA-bkPRzOZIypmeMdqUVoWp7OOB0rW1GsybZjgQvcJWrvc9DoYe_GD7qB_90LEPBmXNb3QHKNnaKpxKD0EZdgqtmO6bbQnPYRtgDKwY8xwffE4lgGmkDRIiz0MLBGbchIIWk831UiXDjh-tNvjUVznuWDi4-GP2qKSrkaqlRXCngUJ4_wBlm00)


---

### Створення опитування

***ID:*** UC.1.4

***НАЗВА:***  Створення нового опитування та формування анкети аналітиком.

***УЧАСНИКИ:***  Аналітик, Система.

***ПЕРЕДУМОВИ:***  Аналітик авторизований у системі.

***РЕЗУЛЬТАТ:***  Опитування створено.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

•	EX.4.1. Задано некоректні параметри при формуванні анкети.

###### ДІАГРАМА СЦЕНАРІЮ:
![uml](http://www.plantuml.com/plantuml/png/dL8xJiD04ErzYbMEGPeSX0O9EWY8cCw5OHiwKo1JeIWI7StYP2Nas4RA2TxSYBSJMmYjK4oImkDvRzv7ycoHdjscTrUNIOOdj73OIYaF-4IT9OO_nNKwmIjSWEGUDQTdmqUB3b-enPhJ-UuTA-8LEid98jCeNi4RfN4dbg-EwrQAtNQgmXbMGPG77WrSrhij9TUhZbnBDoava2KvHHfosxt5Xf4BsXCRpFtUmAXJ3H-8WrVSKjtUzB1HfvypiTDntITuuHMRCjrZN_v0eCc_sdFqAhGETNKPUuYDi_zTUTahLWHoAOul_Z542yHV8WSwnW4g_ZqsMgQaF4SNnY5DRoObrffcTDr5UdsJp2xcv_pMlm40)


---

### Аналіз результатів опитування та формування звіту

***ID:*** UC.1.5

***НАЗВА:***  Аналіз результатів анкетування та формування звіту аналітиком, їх відправка.

***УЧАСНИКИ:***  Аналітик, Система.

***ПЕРЕДУМОВИ:***  Наявність результатів опитування.

***РЕЗУЛЬТАТ:***  Звіт сформовано.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

•	EX.5.1. Відсутні результати опитування.

###### ДІАГРАМА СЦЕНАРІЮ:
![uml](http://www.plantuml.com/plantuml/png/fL8zJiCm6Drx2gl7A4iFme846nH4mvQXDB0X1I4K9eHwWn1irNBZv0hlkn7FNoeLX9g5JFRp-zvFzCsNsTbjTdTrESdnZ8WQEwba3O-GJmm_VTVJ32-4F-5bXLfU3HgfOD6ZsvyYdE6b9sCj1HhKXAAK9pgUOyE7UsexjAZplUO7rJeLYL9GbKeniMH5YPRScD8OM0OhpUc2LCSHXwy4m4fXzBgLWi0JoJM7ApH6xGFSxp0_OFWXsP7cCxmdhHIQV6qS43Lia89HfjZ80phQjuF3a7IB9WbDnseV71byg6qKiJJpsAdTtrx_J_p6gK1XdsX7Vj5eSbq2gzub3GuAMfqrwDsdERKaiwC4vGb6me-Z1PRPzSraVh4uvq9-0m00)